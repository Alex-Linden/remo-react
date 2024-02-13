
// import React from 'react';

// function Board({ matrix }) {
//   const rows = matrix.map((row, i) => (
//     <div key={i} className="board-row">
//       {row.map((cell, j) => (
//         <div key={j} className="board-cell">
//           {cell == 'x' && <div className="x-marker">X</div>}
//           {cell == 'o' && <div className="o-marker">O</div>}
//           {cell == ' ' && <div className="empty-cell">&nbsp;</div>}
//         </div>
//       ))}
//     </div>
//   ));

//   return <div className="board">{rows}</div>;
// }

// export default Board;

// import React from 'react';
// import './Board.css';

// function Board({ matrix }) {
//   const rows = matrix.map((row, i) => (
//     <div key={i} className="board-row">
//       {row.map((cell, j) => (
//         <div key={j} className="board-cell">
//           {cell == 'x' && <div className="x-marker">X</div>}
//           {cell == 'o' && <div className="o-marker">O</div>}
//           {cell == ' ' && <div className="empty-cell" style={{background: 'lightgray'}}>&nbsp;</div>}
//         </div>
//       ))}
//     </div>
//   ));

//   return <div className="board">{rows}</div>;
// }

// export default Board;

// Response 1
import React from 'react';

function Board({ matrix }) {
  const rows = matrix.map((row, i) => (
    <div className="board-row" key={i}>
      {row.map((cell, j) => (
        <div className="board-cell" key={j}>
          {cell === 'x' && <div className="x-marker">X</div>}
          {cell === 'o' && <div className="o-marker">O</div>}
          {cell === ' ' && <div className="empty-cell" />}
        </div>
      ))}
    </div>
  ));

  return <div className="board">{rows}</div>;
}

export default Board;