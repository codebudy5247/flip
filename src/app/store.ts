import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { authApi } from '../Services/AuthApi';
import { uploadApi } from '../Services/uploadApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [authApi.reducerPath]:authApi.reducer,
    [uploadApi.reducerPath]:uploadApi.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
