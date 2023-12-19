import { configureStore } from '@reduxjs/toolkit';
import ToolsSlice from '../slices/ToolsSlice';

const store = configureStore({
  reducer: {
    tools: ToolsSlice,
  },
  devTools: import.meta.env.DEV,
});

export default store;
