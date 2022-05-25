import { useEffect, useState } from "react";
import "./Home.css";
import Tic from "../component/Tic";
import { ResetScores, setScores } from "../store/scoreSlice";
import scoreSlice from "../store/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { score } from "../component/Navbar";
import { setGameState } from "../store/GameStateSlice";
import GameStateSlice from "../store/GameStateSlice";

const initialState = ["", "", "", "", "", "", "", "", ""];

function Home() {
  const dispatch = useDispatch();
  // const [gameState, setGameState] = useState(initialState);
  const gameState = useSelector((state) => state.gameState);

  const [winner, setWinner] = useState("");

  const [isXChance, setIsXChance] = useState(false);
  //   const reduxState = useSelector(setScores);
  //   console.log("reduxState", reduxState);
  //   const [scores, setScores] = useState({
  //     xScore: 0,
  //     oScore: 0,
  //     // draw: 0
  //   });
  const [gameOver, setGameOver] = useState();

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
      dispatch(setGameState(index));
      setIsXChance(!isXChance);
      console.log("turn", setIsXChance);
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

  const handleClearBtn = () => {
    setGameState(initialState);
    setGameOver(false);
    setWinner("");
    // setScores({ xScore: 0, oScore: 0 });
    // debugger;
    // if (isWinner !== null) {
    //   console.log(isWinner);
    // setWinner(localStorage.removeItem("winner"));
    // }
  };

  // debugger;

  // const checkLocalStorage = JSON.parse(localStorage.getItem("gameState"));

  // const checkScore = JSON.parse(localStorage.getItem("scores"));
  // const isWinner = JSON.parse(localStorage.getItem("winner"));

  //to get from Local Storage
  // useEffect(() => {
  //   // console.log("setGameState");
  //   // if (checkLocalStorage !== null)
  //   {
  //     setGameState(JSON.parse(localStorage.getItem("gameState")));
  //   }
  //   setIsXChance(JSON.parse(localStorage.getItem("turn")));
  //   // setScores(JSON.parse(localStorage.getItem("scores")));
  // }, []);

  // // add to local Storage
  // useEffect(() => {
  //   // debugger;
  //   if (JSON.stringify(gameState) !== JSON.stringify(initialState)) {
  //     // console.log("setcalled", gameState);
  //     localStorage.setItem("gameState", JSON.stringify(gameState));
  //     localStorage.setItem("turn", JSON.stringify(isXChance));
  //     // localStorage.setItem("scores", JSON.stringify(scores));
  //   }
  // }, [gameState]);

  // const handleRestart = () => {
  //   if (checkLocalStorage !== null) {
  //     dispatch(ResetScores(checkLocalStorage));
  //     setGameState(localStorage.removeItem("gameState"));
  //     setGameState("");
  //     setGameState(initialState);
  //     setWinner("");
  //     setIsXChance(false);
  //     // dispatch(ResetScores(checkLocalStorage));
  //     // console.log("Reset", ResetScores());
  //   }
  //   // else if (checkScore !== 0) {
  //   //   setScores({ xScore: 0, oScore: 0, draw: 0 });
  //   // }
  // };

  return (
    <div className="App">
      <div className="btnHeader">
        <button className="btn" onClick={() => handleClearBtn()}>
          Clear Game
        </button>
        <h2 className="headingText">Welcome to Tic-Tak-Toe</h2>
        {/* <button className="btn" onClick={() => handleRestart()}>
          Restart
        </button> */}
      </div>

      <div className="TimerContainer"></div>
      <div className="ScoreCard">
        <div>{/* <p>X - {scores}</p> */}</div>
        <div>{/* <p>O - {scores}</p> */}</div>
      </div>
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
