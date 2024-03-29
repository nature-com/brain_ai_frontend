import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../store/api';
import errorHandler from '../store/errorHandler';

export const toolsList = createAsyncThunk(
  'tools/tools-list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('user/tools');
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

export const toolsListTwo = createAsyncThunk(
  'tools/tools-list-two',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('user/get-tools');
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

export const toolsByIdTwo = createAsyncThunk(
  'tools/tools-by-id-two',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`user/get-tools/${id}`);
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
      const { subject, description, tools_name } = userInput;
      const response = await api.post('user/tools/ais', { subject, description, tools_name });
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

// Upload File | Mehtod: POST
export const fileUpload = createAsyncThunk(
  'tools/file-upload',
  async (audio_file, { rejectWithValue }) => {
    try {
      const response = await api.post('/user/speech-to-text', audio_file);
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
  audioAnswer: null,
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    clearAnswer: (state) => {
      state.answer = null;
      state.audioAnswer = null;
    },
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
      .addCase(toolsList.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(toolsListTwo.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(toolsListTwo.fulfilled, (state, response) => {
        state.isLoading = false;
        state.error = false;
        state.toolsList = {
          details: response?.payload?.data,
        }
      })
      .addCase(toolsListTwo.rejected, (state) => {
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
      .addCase(toolsById.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(toolsByIdTwo.pending, (state) => {
        state.isLoading = true;
        state.message = null;
      })
      .addCase(toolsByIdTwo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.toolsDetails = {
          details: payload?.data[0],
        }
      })
      .addCase(toolsByIdTwo.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

      .addCase(generateAnswer.pending, (state) => {
        state.isLoading = true;
        state.message = null;
        state.answer = null;
      })
      .addCase(generateAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.answer = payload.data
      })
      .addCase(generateAnswer.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.answer = null;
      })

      .addCase(fileUpload.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.message = null;
      })
      .addCase(fileUpload.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.audioAnswer = payload?.data;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
      .addCase(fileUpload.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = true;
        state.message =
          payload !== undefined && payload.message
            ? payload.message
            : 'Something went wrong. Try again later.';
      })
  }
})
export const { clearAnswer } = toolsSlice.actions;

export default toolsSlice.reducer;