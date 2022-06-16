import { createSlice } from "@reduxjs/toolkit";
import { score } from "../component/Navbar";

const scores = { xScore: 0, oScore: 0 };

const scoreSlice = createSlice({
  name: "score",
  initialState: scores,
  reducers: {
    setScores(state, action) {
      // console.log("action", action.payload);
      // debugger;
      // state.data = action.payload;
      if (action.payload === "X") {
        state.xScore += 1;
      } else {
        state.oScore += 1;
      }
      return state;
    },
    restoreScore(state, action) {
      state = action.payload;
      return state;
    },
    ResetScores(state, action) {
      // state.data = action.payload;
      return (state = scores);

      // if (score !== 0) {
      //   state.xScore = 0;
      // }
      // if (score !== 0) {
      //   state.oScore = 0;
      // }
    },
  },
});

export const { setScores, ResetScores, restoreScore } = scoreSlice.actions;
export default scoreSlice.reducer;
