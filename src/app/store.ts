import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch,useSelector as useAppSelector,TypedUseSelectorHook } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig,rootReducer } from './rootReducer'
import { authApi } from '../Services/AuthApi';
import { postApi } from '../Services/PostApi';
// ----------------------------------------------------------------------

const store = configureStore({
  reducer: persistReducer(rootPersistConfig , rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })
    // .concat([authApi.middleware,postApi.middleware]),
    ,
    devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, persistor, dispatch, useSelector, useDispatch };
