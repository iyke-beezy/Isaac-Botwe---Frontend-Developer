import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataStore';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;