// import React from "react";

// // const [scores, setScores] = useState({
// //   xScore: 0,
// //   oScore: 0,
// // });

// // const checkResult = () => {
// //   const [winner, setWinner] = useState("");

// const checkResult = () => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (
//       gameState[a] &&
//       gameState[a] === gameState[b] &&
//       gameState[a] === gameState[c]
//     ) {
//       return gameState[a];
//     }
//   }
//   return null;
// };

// const winner = checkWinner();
// // debugger;
// // if (winner) {
// //   setWinner(winner);
// //   console.log(winner);
// //   if (winner === "O") {
// //     let { oScore } = scores;
// //     oScore += 1;
// //     setScores({ ...scores, oScore });
// //   } else {
// //     let { xScore } = scores;
// //     xScore += 1;
// //     setScores({ ...scores, xScore });
// //   }
// //   console.log(scores);
// //   setGameOver(true);
// // }
// // };
// // export default checkWinner
// export default checkResult;
