import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import signupReducer from '../features/signup/signupSlice';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
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
