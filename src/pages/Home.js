import { useEffect, useState } from "react";
import { Button } from "@mui/material";
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
import setIsXChance from "../store/chanceSlice";
import GameStateSlice from "../store/GameStateSlice";
import { setWinner } from "../store/WinnerSlice";

const initialState = ["", "", "", "", "", "", "", "", ""];

function Home() {
  const dispatch = useDispatch();
  // const [gameState, setGameState] = useState(initialState);
  const gameState = useSelector((state) => state.gameState);
  // console.log("gameState", gameState);
  const [winner, setWinner] = useState("");
  // const winner = useSelector((state) => state.winner);
  const [isXChance, setIsXChance] = useState(false);
  // const isXChance = useSelector((state) => state.isXChance);
  //   const reduxState = useSelector(setScores);
  //   console.log("reduxState", reduxState);
  //   const [scores, setScores] = useState({xScore: 0, oScore: 0});
  const [gameOver, setGameOver] = useState();
  const [isInitialrender, setIsInitialRender] = useState(true); //this logic used to prevent initial rendereing of both useEffect(one for setItem and other for GetItem) bcoz once data saved in LS, at the same time other useEffect also fetch data which has blank value at inital.

  //   const {
  //     xScore,
  //     oScore,
  //     // draw
  //   } = scores;

  const onSquareCLicked = (index) => {
    if (gameState[index] === "") {
      //to prevent user for already clicked square...cant change X to O if
      // let strings = Array.from(gameState); //ask nikhil to Array.from
      // strings[index] = isXChance ? "X" : "O";
      // console.log("strings", strings);
      // setGameState(strings);
      dispatch(setGameState({ index, isXChance }));
      setIsXChance(!isXChance);
      // dispatch(setIsXChance(index));
      // dispatch(setIsXChance(!isXChance));
      // dispatch(setIsXChance());
      // console.log("Turn", gameState);
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
      //  else if (gameState !== "") {
      //   return draw;
      //   console.log(draw);
      // }
    }
    return null;
  };

  useEffect(() => {
    let winner = checkWinner();
    // debugger;
    if (winner) {
      dispatch(setScores(winner));
      setGameOver(true);
    }
  }, [gameState]);

  // debugger;

  useEffect(() => {
    console.log("called");
    // debugger;
    try {
      const gameState = localStorage.getItem("game");
      // console.log("game getvalue", gameState);
      if (gameState) {
        setIsXChance(!isXChance); // after restart everytime"O" was clicked wethere it is previously "O" was clicked, so we hav change it
        const checkLocalStorage = JSON.parse(gameState);
        // console.log("LS", checkLocalStorage);
        if (checkLocalStorage != null) {
          dispatch(restoreGameState(checkLocalStorage));
        }
      }
    } catch (error) {
      // console.log("from LS", error);
      // setIsXChance(!isXChance);
    }

    // setIsXChance(JSON.parse(localStorage.getItem("turn")));
    // setScores(JSON.parse(localStorage.getItem("scores")));
  }, []);

  // // add to local Storage
  useEffect(() => {
    // debugger;
    if (!isInitialrender) {
      const gameStateToLS = JSON.stringify(gameState);
      console.log("set", gameStateToLS);
      const initial = JSON.stringify(initialState);
      try {
        // if (gameStateToLS !== initial) {
        // console.log("setcalled", gameState);
        localStorage.setItem("game", gameStateToLS);
        // localStorage.setItem("turn", initial);
        // }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      setIsInitialRender(false);
    }
  }, [gameState]);

  const handleClearBtn = () => {
    // setGameState(initialState);
    setGameOver(false);
    setWinner("");
    // dispatch(setWinner(""));
    dispatch(resetGameState(initialState));
  };

  const handleRestart = () => {
    // debugger;
    // const gamedata = localStorage.getItem("gameState");
    // const checkLocalStorage = JSON.parse(gamedata);
    // if (checkLocalStorage !== null) {
    dispatch(ResetScores(initialState));
    dispatch(resetGameState(initialState));
    // dispatch(setGameState(localStorage.removeItem("gameState")));
    // setGameState("");
    // setGameState(initialState);
    setGameOver(false);
    setWinner("");
    // dispatch(setWinner(""));
    setIsXChance(false);
  };

  return (
    <div className="App">
      <div className="btnHeader">
        <Button className="btn" onClick={() => handleClearBtn()}>
          Clear Game
        </Button>
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
      {/* <div>
        <h4>Turn : {isXChance} </h4>
      </div> */}
      {winner && (
        <>
          <p>{winner} has won the game </p>
        </>
      )}
    </div>
  );
}

// export const { winner } = Home;
export const { checkWinner } = Home;

export default Home;
