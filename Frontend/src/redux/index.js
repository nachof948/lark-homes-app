import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import { reducers } from './reducers';

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor }

// Llama al método purge() del persistor
/* persistor.purge().then(() => {
  console.log('Estado persistente restablecido');
}).catch((error) => {
  console.error('Error al restablecer el estado persistente:', error);
}); */