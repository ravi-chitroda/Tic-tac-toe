import { createSlice } from "@reduxjs/toolkit";

const initial = ["", "", "", "", "", "", "", "", ""];

const GameStateSlice = createSlice({
  name: "gameState",
  initialState: initial,
  reducers: {
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
    restoreGameState(state, action) {
      return (state = action.payload);
    },
    // addToLocalStorage(state, action) {
    //   const gameStateToLS = JSON.stringify(gameState);
    //   return (state = localStorage.setItem("game", gameStateToLS));
    // },
  },
});

export const { setGameState, resetGameState, restoreGameState } =
  GameStateSlice.actions;
export default GameStateSlice.reducer;

//MIDDLEWARE
// debugger;
// export const localStorageMiddleware = ({ gameState }) => {
//   return (next) => (action) => {
//     const result = next(action);
//     localStorage.setItem("game", JSON.stringify(gameState));
//     return result;
//   };
// };

// export const reHydrateStore = () => {
//   if (localStorage.getItem("game") !== null) {
//     return JSON.parse(localStorage.getItem("game"));
//   }
// };

// export const localStorageMiddleware = () => {
//   return localStorage.setItem("game", JSON.stringify(gameState));
// };
// export const reHydrateStore = () => {
//   return JSON.parse(localStorage.getItem("game"));
// };
