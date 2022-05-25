import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { setScores } from "../store/scoreSlice";
import scoreSlice from "../store/scoreSlice";

const Navbar = () => {
  const score = useSelector((state) => state.score);
  // const scoreResult = Object.values(score);
  // console.log("score", score);
  return (
    <div className="navbar">
      <div className="navLeft">Tic-Tac-Toe</div>
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
