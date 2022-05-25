import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import gameStateReducer from "./GameStateSlice";

const store = configureStore({
  reducer: {
    score: scoreReducer,
    gameState: gameStateReducer,
    // winner: winnerReducer,
  },
});
export default store;
