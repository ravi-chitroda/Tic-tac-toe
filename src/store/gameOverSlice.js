import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initial = true;

const gameOverSlice = createSlice({
  name: "gameOver",
  initialState: initial,
  reducers: {
    setGameOver(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setGameOver } = gameOverSlice.actions;
export default gameOverSlice.reducer;
