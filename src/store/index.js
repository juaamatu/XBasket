import createSecureStore from 'redux-persist-expo-securestore';
import { compose, applyMiddleware, createStore } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist';
import reducer from '../reducers'

const storage = createSecureStore()
const config = {
  key: "root",
  storage
}
const persistentReducer = persistCombineReducers(config, reducer)

export const store = createStore(persistentReducer);
export const persistor = persistStore(store);