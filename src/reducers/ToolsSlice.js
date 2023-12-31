import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';


export const toolsList = createAsyncThunk(
  'tools/tools-list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('user/tools');
      console.log(response)
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

export const toolsById = createAsyncThunk(
  'tools/tools-by-id',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`user/tools/${id}`);
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

export const generateAnswer = createAsyncThunk(
  'tools/generate-answer',
  async (userInput, { rejectWithValue }) => {
    try {
      const { subject, description } = userInput;
      const response = await api.post('user/tools/ais', { subject, description });
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
  isLoading: false,
  toolsList: [],
  toolsDetails: [],
  answer: null,
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(toolsList.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(toolsList.fulfilled, (state, response) => {
        state.isLoading = false;
        state.error = false;
        state.toolsList = {
          details: response?.payload?.data,
        }
      })
      .addCase(toolsList.rejected, (state, response) => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(toolsById.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(toolsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.toolsDetails = {
          details: payload?.data[0],
        }
      })
      .addCase(toolsById.rejected, (state, response) => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(generateAnswer.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(generateAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.answer = payload.data
      })
      .addCase(generateAnswer.rejected, (state, response) => {
        state.isLoading = false;
        state.error = true;
      })
  }
})

export default toolsSlice.reducer;