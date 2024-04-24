import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import adminReducer from './admin/adminSlice';
import cartReducer from '../redux/cart/cartSlice';


const adminPersistConfig = {
  key: 'admin',
  storage,
  version: 1,
}

const cartPersistConfig = {
  key: 'cart',
  storage,
  version: 1,
}

const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    admin: persistedAdminReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);
