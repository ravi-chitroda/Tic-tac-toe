import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import gameStateReducer from "./GameStateSlice";
// import { localStorageMiddleware, reHydrateStore } from "./GameStateSlice";
// import chanceReducer from "./chanceSlice";
import chanceReducer from "./chanceSlice";
import winnerReducer from "./WinnerSlice";
import gameOverReducer from "./gameOverSlice"
// import initialRender from "./initialRenderSlice"
import initialRenderReducer from "./initialRenderSlice"
// import winnerReducer from "./WinnerSlice"

const store = configureStore({
  reducer: {
    score: scoreReducer,
    gameState: gameStateReducer,
    chance: chanceReducer,
    winner: winnerReducer,
    gameOver: gameOverReducer,
    initialRender: initialRenderReducer,
    // initialRender: initialRenderReducer
  },

});
export default store;
