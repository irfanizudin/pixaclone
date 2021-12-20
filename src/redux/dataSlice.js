import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  datas: {},
  loading: false,
};

export const getDataAsync = createAsyncThunk(
  "data/getDataAsync",
  async (term = "design", type = "all") => {
    const response = await axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=${type}}`
      )
      .catch((err) => console.log("Erorr", err));
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getDataAsync.pending]: (state) => {
      console.log("pending");
      state.loading = true;
    },
    [getDataAsync.fulfilled]: (state, { payload }) => {
      console.log("fulfiled");
      state.loading = false;
      state.datas = payload;
    },
    [getDataAsync.rejected]: (state) => {
      state.loading = false;
      console.log("rejected");
    },
  },
});

export default dataSlice.reducer;
