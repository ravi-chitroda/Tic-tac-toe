import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import gameStateReducer from "./GameStateSlice";
// import { localStorageMiddleware, reHydrateStore } from "./GameStateSlice";
// import chanceReducer from "./chanceSlice";
import chanceReducer from "./chanceSlice";
import winnerReducer from "./WinnerSlice";
// import winnerReducer from "./WinnerSlice"

const store = configureStore({
  reducer: {
    score: scoreReducer,
    gameState: gameStateReducer,
    chance: chanceReducer,
    winner: winnerReducer,
    // winner: winnerReducer,
  },

});
export default store;
