import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/authStore';
import  uiReducer from '@/store/uiStore';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui:uiReducer,
  },
});
