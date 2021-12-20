import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  datas: {},
};

export const getDataAsync = createAsyncThunk("data/getDataAsync", async () => {
  const response = await axios
    .get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=yellow+flowers&image_type=photo`
    )
    .catch((err) => console.log("Erorr", err));
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getDataAsync.pending]: () => {
      console.log("pending");
    },
    [getDataAsync.fulfilled]: (state, { payload }) => {
      console.log("fulfiled");
      state.datas = payload;
    },
    [getDataAsync.rejected]: () => {
      console.log("rejected");
    },
  },
});

// export const fetchData = (state) => state.data.datas;
// export const { removeData } = dataSlice.actions;
export default dataSlice.reducer;
