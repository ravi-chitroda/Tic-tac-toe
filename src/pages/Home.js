import { useEffect, useState } from "react";
import "./Home.css";
import Tic from "../component/Tic";
import { ResetScores, setScores } from "../store/scoreSlice";
import scoreSlice from "../store/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { score } from "../component/Navbar";
import {
  resetGameState,
  restoreGameState,
  setGameState,
} from "../store/GameStateSlice";
import GameStateSlice from "../store/GameStateSlice";
import { setIsXChance } from "../store/chanceSlice";
import { setWinner } from "../store/WinnerSlice";
import { setGameOver } from "../store/gameOverSlice";

const initialState = ["", "", "", "", "", "", "", "", ""];

function Home() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState);
  // const [winner, setWinner] = useState("");
  const winner = useSelector((state) => state.winner);
  console.log("winnerState", winner);
  // const [isXChance, setIsXChance] = useState(false);
  const isXChance = useSelector((state) => state.chance);
  console.log("state", isXChance);

  // const [gameOver, setGameOver] = useState();
  const gameOver = useSelector((state) => state.gameOver);
  console.log("gameOver", gameOver);
  const [isInitialrender, setIsInitialRender] = useState(true); //this logic used to prevent initial rendereing of both useEffect(one for setItem and other for GetItem) bcoz once data saved in LS, at the same time other useEffect also fetch data which has blank value at inital.

  const onSquareCLicked = (index) => {
    if (gameState[index] === "") {
      dispatch(setGameState({ index, isXChance }));
      console.log("Before click", isXChance);
      // setIsXChance(!isXChance);
      dispatch(setIsXChance(isXChance));
      // dispatch(setIsXChance(index));
      console.log("after Click", isXChance);
    }
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  useEffect(() => {
    let winner = checkWinner();

    // debugger;
    if (winner) {
      // alert(`ohh yes!!! ${winner2} has won the game`);
      console.log("winner", winner);
      dispatch(setScores(winner));
      // setGameOver(true);
      dispatch(setGameOver(true));
      dispatch(setWinner(winner));
    }
  }, [gameState]);

  // debugger;
  console.log("click", isXChance);

  //to Get from Local Storage
  useEffect(() => {
    console.log("called", isXChance);
    // debugger;
    try {
      const gameState = localStorage.getItem("game");
      console.log("game getvalue", gameState);
      if (gameState) {
        const checkLocalStorage = JSON.parse(gameState);
        console.log("LS", checkLocalStorage);
        if (checkLocalStorage != null) {
          dispatch(restoreGameState(checkLocalStorage));
        }
      }
    } catch (error) {
      console.log("from LS", error);
    }
  }, []);

  // // add to local Storage
  useEffect(() => {
    // debugger;
    if (!isInitialrender) {
      const gameStateToLS = JSON.stringify(gameState);
      console.log("set", gameStateToLS);
      const initial = JSON.stringify(initialState);
      try {
        localStorage.setItem("game", gameStateToLS);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setIsInitialRender(false);
    }
  }, [gameState]);

  const handleClearBtn = () => {
    dispatch(setGameOver(false));
    // setWinner("");
    dispatch(setWinner(""));
    dispatch(resetGameState(initialState));
  };

  const handleRestart = () => {
    dispatch(ResetScores(initialState));
    dispatch(resetGameState(initialState));

    dispatch(setGameOver(false));
    dispatch(setWinner(""));
    // setWinner("");
    dispatch(setIsXChance(false));
  };

  return (
    <div className="App">
      <div className="btnHeader">
        <button className="btn" onClick={() => handleClearBtn()}>
          Clear Game
        </button>
        <h2 className="headingText">Welcome to Tic-Tak-Toe</h2>
        <button className="btn" onClick={() => handleRestart()}>
          Restart
        </button>
      </div>

      <div className="TimerContainer"></div>
      <div className="row jc-center">
        <Tic
          className="border-right-bottom"
          state={gameState[0]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(0))}
        />
        <Tic
          className="border-right-bottom"
          state={gameState[1]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(1))}
        />
        <Tic
          className="border-bottom"
          state={gameState[2]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(2))}
        />
      </div>
      <div className="row jc-center">
        <Tic
          className="border-right-bottom"
          state={gameState[3]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(3))}
        />
        <Tic
          className="border-right-bottom"
          state={gameState[4]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(4))}
        />
        <Tic
          className="border-bottom"
          state={gameState[5]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(5))}
        />
      </div>
      <div className="row jc-center">
        <Tic
          className="border-right"
          state={gameState[6]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(6))}
        />
        <Tic
          className="border-right"
          state={gameState[7]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(7))}
        />
        <Tic
          state={gameState[8]}
          onClick={() => (gameOver ? handleClearBtn : onSquareCLicked(8))}
        />
      </div>
      <div>
        {
          <>
            <p>
              {/* {!winner} ?  */}
              <span>Turn of :~ </span>
              {isXChance ? "X" : "O"}
              {/* : {winner} has won the game{" "} */}
            </p>
          </>
        }
      </div>
      {winner && (
        <>
          <p>{winner} has won the game </p>
        </>
      )}
    </div>
  );
}

// export const { winner } = Home;

export default Home;
