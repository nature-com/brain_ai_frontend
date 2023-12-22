import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';

export const registerUser = createAsyncThunk(
  'user/register',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/register', userInput);
      if (response?.data?.status_code === 201) {
        return response.data;
      } else {
        if (response?.data?.errors) {
          return rejectWithValue(response.data.errors);
        } else {
          return rejectWithValue('Something went wrong.');
        }
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const sendOtp = createAsyncThunk(
  'user/send-otp',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('user/send-otp', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        if (response?.data?.errors) {
          return rejectWithValue(response.data.errors);
        } else {
          return rejectWithValue('Failed to send OTP');
        }
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'user/verify-otp',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('user/verify-otp', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        if (response?.data?.errors) {
          return rejectWithValue(response.data.errors);
        } else {
          return rejectWithValue('Failed to verify OTP');
        }
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const makePayment = createAsyncThunk(
  'user/payment',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/payment', userInput);
      if (response?.data?.status_code === 200) {
        console.log('response of makepayment', response.data);
        return response.data;
      } else {
        throw Error('Failed to register user');
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/login', userInput);
      if (response?.data?.status_code === 200) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (err) {
      let errors = errorHandler(err);
      return rejectWithValue(errors);
    }
  }
);


const initialState = {
  message: null,
  error: null,
  loading: false,
  isLoggedIn: false,
  currentUser: {},
  subscription: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = {};
    },
    resetAfterLoggedIn: (state) => {
      state = { ...initialState, isLoggedIn: true };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.message = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user_id, email, otp_verified, access_token } = payload;
        state.loading = false;
        state.message = payload;
        state.currentUser = {
          user_id: user_id,
          email: email,
          otp_verified: otp_verified,
        };
        localStorage.setItem(
          'regToken',
          JSON.stringify({ token: access_token })
        );
        localStorage.setItem('userId', JSON.stringify({ user_id: user_id }));
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(sendOtp.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.currentUser.otp_verified = 1;
      })
      .addCase(sendOtp.rejected, (state, response) => {
        state.loading = false;
        state.message =
          response.payload !== undefined && response.payload.message
            ? response.payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(verifyOtp.pending, (state) => {
        state.message = null;
        state.error = null;
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, { payload }) => {
        const { message } = payload;
        state.loading = false;
        state.currentUser.otp_verified = 1;
        state.message = message;
      })
      .addCase(verifyOtp.rejected, (state, response) => {
        state.loading = false;
        state.message =
          response.payload !== undefined && response.payload.message
            ? response.payload.message
            : 'Something went wrong. Try again later.';
      })

      .addCase(makePayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(makePayment.fulfilled, (state) => {
        state.loading = false;
        state.currentUser.payment_status = true;
        state.currentUser.payment_message =
          'Subscription created successfully.';
      })
      .addCase(makePayment.rejected, (state) => {
        state.loading = true;
      })

      .addCase(login.pending, (state) => {
        state.isFetching = true;
        state.isLoggedIn = false;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const { access_token, subscription, email, user_id, otp_verified } =
          payload;
        state.isLoggedIn = true;
        if (subscription !== null) {
          state.subscription = true;
        }
        state.currentUser = {
          user_id: user_id,
          email: email,
          otp_verified: otp_verified,
        };
        localStorage.setItem(
          'userToken',
          JSON.stringify({ token: access_token })
        );
        localStorage.setItem(
          'isSubscribed',
          JSON.stringify({ isSubscribed: subscription })
        );
        localStorage.setItem('userId', JSON.stringify({ user_id: user_id }));
        localStorage.removeItem('regToken');
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })

  },
});

export const { clearCurrentUser, resetAfterLoggedIn } = authSlice.actions;
export default authSlice.reducer;