// import { createSlice } from "@reduxjs/toolkit";
// import React from "react";
// // import checkResult from "../component/checkResult";
// import { checkWinner } from "../pages/Home";

import { createSlice } from "@reduxjs/toolkit";

// // const checkWinner = () => {
// //     const lines = [
// //       [0, 1, 2],
// //       [3, 4, 5],
// //       [6, 7, 8],
// //       [0, 3, 6],
// //       [1, 4, 7],
// //       [2, 5, 8],
// //       [0, 4, 8],
// //       [2, 4, 6],
// //     ];
// //     for (let i = 0; i < lines.length; i++) {
// //       const [a, b, c] = lines[i];
// //       if (
// //         gameState[a] &&
// //         gameState[a] === gameState[b] &&
// //         gameState[a] === gameState[c]
// //       ) {
// //         return gameState[a];
// //       }
// //       //  else if (gameState !== "") {
// //       //   return draw;
// //       //   console.log(draw);
// //       // }
// //     }
// //     return null;
// //   };

// //   const winner = checkWinner

// const winnerSlice = createSlice({
//   name: "winner",
//   initialState: [],
//   data: winner,
//   reducers: {
//     setWinner(state, action) {
//       state.data = action.payload;
//     },
//   },
// });
// export const { setWinner } = winnerSlice.actions;
// export default winnerSlice.reducer;

const inital = "";

const winnerSlice = createSlice({
  name: "winner",
  initialState: inital,
  reducers: {
    setWinner(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setWinner } = winnerSlice.actions;
export default winnerSlice.reducer;
