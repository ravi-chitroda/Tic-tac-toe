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
      const { index, isXChance } = action?.payload;

      state[index] = isXChance ? "X" : "O";
      return state;
    },
  },
});

export const { setGameState, setisXChance } = GameStateSlice.actions;
export default GameStateSlice.reducer;
