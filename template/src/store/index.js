import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import authReducer from './reducers/authentication';

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const middleware =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(
        thunk,
        // Other middlewares
      )
    : applyMiddleware(
        thunk,
        logger,
        // Other middlewares
      );

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  ),
);

const persistor = persistStore(store);

export { persistor, store };
