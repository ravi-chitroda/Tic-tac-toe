import { createSlice } from "@reduxjs/toolkit";

const initial = ["", "", "", "", "", "", "", "", ""];
let strings = Array.from(initial);
const isXChance = false;

const GameStateSlice = createSlice({
  name: "gameState",
  initialState: initial,
  reducers: {
    // setisXChance(state, action) {
    //   strings[index] = isXChance ? "X" : "O";
    //   state.strings = action.payload;
    // },
    setGameState(state, action, index) {
      // debugger;
      strings[index] = isXChance ? "X" : "O";
      // return (state[index] = initial[action.payload]);
      // state[index] = initial[index];
      return (state = (initial) => [...initial, action.payload]);

      // state.push(action.payload);
      // state = action.payload;
      // state.strings = strings(initial);
      // console.log("state", setGameState);
      // state = [...action.payload];
      // state = action.payload;
      // state.data = [{ ...strings }, action.payload];
      // state.push(strings.action.payload);
      // state.push(...strings);
    },
  },
});

export const { setGameState, setisXChance } = GameStateSlice.actions;
export default GameStateSlice.reducer;
