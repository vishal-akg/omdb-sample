import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  results: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    SET_LOADING: (state, action) => {
      state.loading = action.payload.loading;
    },
    SET_RESULTS: (state, action) => {
      console.log(action);
      state.results = action.payload.results;
    },
  },
});

export const { SET_LOADING, SET_RESULTS } = searchSlice.actions;

export default searchSlice.reducer;
