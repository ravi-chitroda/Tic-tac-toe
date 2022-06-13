import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import { setGameState } from "./GameStateSlice";

const initial = { isXChance: true };

const chanceSlice = createSlice({
  name: "chance",
  initialState: initial,
  reducers: {
    setIsXChance(state, action) {
      // debugger;
      // console.log("action?.payload.isXChance", action?.payload.isXChance);
      console.log("action.payload", action.payload);
      // console.log("action", action);
      const isXChance = action?.payload;
      // return (state = !initial);
      // const index = action?.payload.index;
      // const isXChance = action.payload;

      console.log("redux", isXChance);
      return (state = { isXChance: !isXChance }); //here we used object({isXchance: !isXChance}) because const initial = {isXchance:true} is also object

      // state[index] = isXChance ? "X" : "O";
      // return state;
      // return (state = !isXChance);
      // if (initial) {
      //   return (state = isXChance);
      // } else {
      //   return (state = !isXChance);
      // }
    },
  },
});

export const { setIsXChance } = chanceSlice.actions;
export default chanceSlice.reducer;
