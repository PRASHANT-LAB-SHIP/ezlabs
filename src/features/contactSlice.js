import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://vernanbackend.ezlab.in/api/contact-us/";

export const submitContact = createAsyncThunk(
  "contact/submit",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(API, payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const slice = createSlice({
  name: "contact",
  initialState: { loading: false, success: false, error: null },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { reset } = slice.actions;
export default slice.reducer;
