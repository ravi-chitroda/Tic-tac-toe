import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import gameStateReducer, { restoreGameStare } from "./GameStateSlice";
import { localStorageMiddleware, reHydrateStore } from "./GameStateSlice";

const store = configureStore({
  reducer: {
    score: scoreReducer,
    gameState: gameStateReducer,

    // winner: winnerReducer,
  },
  // preloadedState: reHydrateStore(),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});
export default store;
