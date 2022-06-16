import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initial = true;

const initialRenderSlice = createSlice({
  name: "initialRender",
  initialState: initial,
  reducers: {
    setInitialRender(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setInitialRender } = initialRenderSlice.actions;
export default initialRenderSlice.reducer;
