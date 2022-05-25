import { createSlice } from "@reduxjs/toolkit";

const initial = ["", "", "", "", "", "", "", "", ""];
let strings = Array.from(initial);
const isXChance = false;

const chanceSlice = createSlice({
  name: "chance",
  initialState: initial,
  reducers: {
    setisXChance(state, action) {
      strings[index] = isXChance ? "X" : "O";
      state.strings = action.payload;
    },
  },
});

export const { setisXChance } = chanceSlice.actions;
export default chanceSlice.reducer;
