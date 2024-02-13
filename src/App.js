// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NavigationExample from './NavigationExample';
// import Page from './Page';
import React from 'react';
// import Game from './Game';
import Board from './Board';

// function App() {
//     let bGame = [
//       [" ", " ", "o"],
//       ["o", " ", " "],
//       ["x", "x", "x"]
//     ];
//     return (
//       <Game props={bGame} />
//     );
//   };
// export default App;

function App() {
  const board = [
    ["x", "o", "o"],
    [" ", "o", "x"],
    ["x", " ", "o"],
  ];

  return <Board matrix={board} />;
}

export default App;