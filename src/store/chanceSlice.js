import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import { setGameState } from "./GameStateSlice";

const initial = { isXChance: false };

const chanceSlice = createSlice({
  name: "chance",
  initialState: initial,
  reducers: {
    setIsXChance(state, action) {
      debugger;
      let isXChance = action.payload;
      const index = action?.payload.index;
      state[index] = isXChance ? "X" : "O";
      return { ...state[index], isXChance: !state[index].isXChance };

      // if (isXChance === false) {
      //   state.action = "X";
      //   console.log("chance", isXChance);
      //   // isXChance === true;
      // } else {
      //   state.action = "O";
      //   // initial === false;
      //   // isXChance === false;
      // }

      // const index = action?.payload.index;
      // console.log("index", index);
      // const isXChance = action?.payload.isXChance;
      // state[index] = isXChance ? "X" : "O";
      // state[index] = initial;
      // return { ...state[index], isXChance: !state[index].isXChance };
      // return (state.isXChance = !state.isXChance);
      // return { ...state, isXChance: !state.isXChance };
      // return { ...state, isXChance: !state.isXChance };
      // state = { ...state, state: !initial.isXChance };
      // if (isXChance) {
      //   return { ...state[index], isXChance: "x" };
      // } else {
      //   return { ...state[index], isXChance: "O" };
      // }
      // if (state[index] = isXChance){
      //   return (state[index]=
      //   }
      // if (initial) {
      //   return (state[index] = "X");
      // }
      // state[index] = initial;
    },
  },
});

export const { setIsXChance } = chanceSlice.actions;
export default chanceSlice.reducer;
