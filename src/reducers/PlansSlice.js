import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';

export const subscriptionPlans = createAsyncThunk(
    'user/all-plans',
    async (thunkAPI) => {
        try {
            const response = await api.get('user/all-plans');
            if (response?.status === 200 && (response?.data?.data?.monthly_plans.length || response?.data?.data?.yearly_plans.length)) {
                return response.data.data;
            } else {
                throw Error('Failed to load Plan');
            }
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

// Subscription History
export const subscriptionHistory = createAsyncThunk(
    'user/subscription-history',
    async (thunkAPI) => {
        try {
            const response = await api.get('user/subscriptions');
            if (response?.status === 200) {
                return response.data;
            } else {
                throw Error('Failed to load Plan');
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

// Cancel Subscription
export const cancelSubscription = createAsyncThunk(
    'user/payment',
    async (cancelUserSubscription, thunkAPI) => {
        try {
            const response = await api.post('user/payment', cancelUserSubscription);
            if (response?.status === 200) {
                return response.data; // You can return a success message or data if needed.
            } else {
                throw Error('Failed to cancel subscription');
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const stripePayment = createAsyncThunk(
    'user/strip_payment',
    async (entity, { rejectWithValue }) => {
        try {
            // console.log('entity', entity);
            const response = await api.post('/user/payment', entity);
            if (response?.data?.status_code === 200) {
                // console.log('response.data', response.data);
                return response.data;
            } else {
                // Handle the case when status code is not 200
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            let errors = errorHandler(error);
            return rejectWithValue(errors);
        }
    }
);

const initialState = {
    message: null,
    error: null,
    loading: false,
    plans: [],
    subscriptionHistoryList: [],
};

const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(subscriptionPlans.pending, (state) => {
                state.loading = true;
            })
            .addCase(subscriptionPlans.fulfilled, (state, response) => {
                // console.log("response", response);
                state.loading = false;
                state.plans = response.payload;
            })
            .addCase(subscriptionPlans.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })

            .addCase(subscriptionHistory.pending, (state) => {
                state.loading = true;
            })

            .addCase(subscriptionHistory.fulfilled, (state, response) => {
                state.loading = false;
                const subsHistory = response.payload.data[0].user_subscriptions;
                state.subscriptionHistoryList = {
                    history: subsHistory,
                };
                localStorage.setItem(
                    'isSubscribed',
                    JSON.stringify({
                        isSubscribed:
                            response?.data?.data[0]?.user_subscriptions[0]?.plan?.id,
                    })
                );
            })

            .addCase(subscriptionHistory.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            });
    },

});

export default plansSlice.reducer;