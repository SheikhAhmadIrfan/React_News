import { Fetchaction, clearItem } from "../actions/Fetchaction";
import { createSlice } from "@reduxjs/toolkit";

export const Homeslice = createSlice({
  name: "homeslice",
  initialState: {
    isLoading: false,
    item: [],
    isError: false,
    err: false,
    title:null
  },
  reducers: {
    toggleError(state, action) {
      console.log(action.payload)
      state.err = action.payload.flag;
      state.title = action.payload.title;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Fetchaction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(Fetchaction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item.push(action.payload);
      state.isError = false;
    });
    builder.addCase(Fetchaction.rejected, (state, action) => {
      console.log("error", action.error);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(clearItem, (state) => {
      state.item = [];
    });
  },
});
export const Homesliceactions = Homeslice.actions;
