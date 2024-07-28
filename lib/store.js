import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/authStore';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
