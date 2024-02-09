import { configureStore } from '@reduxjs/toolkit';
import ToolsSlice from '../reducers/ToolsSlice';
import AuthSlice from '../reducers/AuthSlice';
import PlansSlice from '../reducers/PlansSlice';
import ProfileSlice from '../reducers/ProfileSlice';
import PaymentSlice from '../reducers/PaymentSlice';
import ContactSlice from '../reducers/ContactSlice';

const store = configureStore({
  reducer: {
    tools: ToolsSlice,
    auth: AuthSlice,
    plans: PlansSlice,
    profile: ProfileSlice,
    payment: PaymentSlice,
    contact: ContactSlice,
  },
  devTools: import.meta.env.DEV,
});

export default store;
