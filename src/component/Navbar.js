import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { restoreScore } from "../store/scoreSlice";
import scoreSlice from "../store/scoreSlice";
import { setIsXChance } from "../store/chanceSlice";
import { setInitialRender } from "../store/initialRenderSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const isXchance = useSelector((state) => state.chance);
  const gameState = useSelector((state) => state.gameState);
  // const initialRender = useSelector((state) => state.initialRender);
  const [initialRender, setInitialRender] = useState(true);

  //add to localstorage
  useEffect(() => {
    if (!initialRender) {
      const scoreToLs = JSON.stringify(score);
      try {
        localStorage.setItem("score", scoreToLs);
      } catch (error) {
        console.log("scoreError", error);
      }
    } else {
      // dispatch(setInitialRender(false));
      setInitialRender(false);
    }
  }, [score]);

  // to get from Local Storage
  useEffect(() => {
    const scoreInLS = localStorage.getItem("score");
    const scoreFromLS = JSON.parse(scoreInLS);

    if (scoreFromLS != null) {
      dispatch(restoreScore(scoreFromLS));
    }

    // dispatch(setScores(scoreFromLS));
  }, []);

  return (
    <div className="navbar">
      <div className="navLeft">Tic-Tac-Toe</div>
      {/* <h4>
        Turn : <span>{isXchance ? { turnX } : { turnO }}</span>
      </h4> */}
      <div className="navRight">
        <h3 className="Score">
          Score : <span style={{ color: "greenYellow" }}>X={score.xScore}</span>{" "}
          ,{" "}
          <span style={{ color: "Red" }}>
            O=
            {score.oScore}
          </span>
        </h3>
        <p>Home</p>
        <p>About</p>
      </div>
    </div>
  );
};
export default Navbar;
export const { score } = Navbar;
