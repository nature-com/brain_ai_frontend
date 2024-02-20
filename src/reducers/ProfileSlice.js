import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../store/api';

export const editProfile = createAsyncThunk(
    'user/edit-profile',
    async (thunkAPI) => {
        try {
            const response = await api.get('user/edit-profile');
            if (response?.status === 200 && response?.data?.data) {
                // console.log('editprofile', response.data);
                localStorage.setItem(
                    'isSubscribed',
                    JSON.stringify({
                        isSubscribed:
                            response?.data?.data[0]?.user_subscriptions[0]?.plan?.id,
                    })
                );
                return response.data.data;
            } else {
                throw Error('Failed to fetch');
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const updateProfile = createAsyncThunk(
    'user/update-profile', // this is frontend url, this is a action which will show is redux actions
    async (userInput, { rejectWithValue }) => {
        try {
            const response = await api.post('user/update-profile', userInput);
            if (response.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.errors) {
                    return rejectWithValue(response.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const updateAvatar = createAsyncThunk(
    'user/update-avatar', // this is frontend url, this is a action which will show is redux actions
    async (avatar, { rejectWithValue }) => {
        try {
            const response = await api.post('user/change-profile-pic', avatar);
            console.log("avatar", avatar);
            if (response.data?.status_code === 200) {
                return response.data;
            } else {
                if (response?.errors) {
                    return rejectWithValue(response.errors);
                } else {
                    return rejectWithValue('Something went wrong.');
                }
            }
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

const initialState = {
    message: null,
    error: null,
    loading: false,
    profile: [],
    // planDetails: [],
    userPlan: [],
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearMessage: (state) => {
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(editProfile.pending, (state) => {
                state.loading = true;
                state.message = null;
            })

            .addCase(editProfile.fulfilled, (state, response) => {
                state.loading = false;
                state.profile = response.payload;
                const subscriptionDetails = response.payload[0].user_subscriptions[0];
                state.userPlan = {
                    details: subscriptionDetails,
                };
            })

            .addCase(editProfile.rejected, (state, response) => {
                state.loading = false;
                state.error = true;
                state.message =
                    response.payload !== undefined && response.payload.message
                        ? response.payload.message
                        : 'Something went wrong. Try again later.';
            })
            .addCase(updateProfile.pending, (state) => {
                state.message = null;
                state.loading = true;
                state.error = null;
            })

            .addCase(updateProfile.fulfilled, (state, response) => {
                state.loading = false;
                state.message = response.payload.message;
            })

            .addCase(updateProfile.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })

            .addCase(updateAvatar.pending, (state) => {
                state.message = null;
                state.loading = true;
                state.error = null;
            })

            .addCase(updateAvatar.fulfilled, (state, response) => {
                state.loading = false;
                state.message = response.payload.message;
            })

            .addCase(updateAvatar.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const { clearMessage } = ProfileSlice.actions;
export default ProfileSlice.reducer;
