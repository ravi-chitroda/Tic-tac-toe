import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { setScores } from "../store/scoreSlice";
import scoreSlice from "../store/scoreSlice";
import { setIsXChance } from "../store/chanceSlice";

const Navbar = () => {
  const score = useSelector((state) => state.score);
  const isXchance = useSelector((state) => state.chance);
  // console.log("navbar_isXchance", isXchance);

  // const turnX = "X";
  // const turnO = "O";

  // if (isXchance) {
  //   return turnX;
  // } else {
  //   return turnO;
  // }
  // const scoreResult = Object.values(score);
  // console.log("score", score);
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
