import { createSlice } from "@reduxjs/toolkit";

const initial = ["", "", "", "", "", "", "", "", ""];

const GameStateSlice = createSlice({
  name: "gameState",
  initialState: initial,
  reducers: {
    // setisXChance(state, action) {
    //   strings[index] = isXChance ? "X" : "O";
    //   state.strings = action.payload;
    // },
    setGameState(state, action) {
      // debugger;
      // const { index, isXChance } = action.payload; //this can be written also in below way
      const index = action?.payload.index;
      const isXChance = action?.payload.isXChance;

      state[index] = isXChance ? "X" : "O";
      return state;
    },
    resetGameState(state, action) {
      return (state = initial);
      // state.initial = action.payload;
    },
    // addToLocalStorage(state, action) {
    //   const gameStateToLS = JSON.stringify(gameState);
    //   return (state = localStorage.setItem("game", gameStateToLS));
    // },
  },
});

export const { setGameState, resetGameState } = GameStateSlice.actions;
export default GameStateSlice.reducer;
