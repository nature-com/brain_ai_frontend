import { configureStore } from '@reduxjs/toolkit';
import ToolsSlice from '../reducers/ToolsSlice';
import AuthSlice from '../reducers/AuthSlice';
import PlansSlice from '../reducers/PlansSlice';
import ProfileSlice from '../reducers/ProfileSlice';

const store = configureStore({
  reducer: {
    tools: ToolsSlice,
    auth: AuthSlice,
    plans: PlansSlice,
    profile: ProfileSlice,
  },
  devTools: import.meta.env.DEV,
});

export default store;
