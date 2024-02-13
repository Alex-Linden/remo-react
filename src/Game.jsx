import React from 'react';
// import { Board, Square, Cell } from './components';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[null, null, null],
              [null, null, null],
              [null, null, null]],
      turn: 'X',
  	};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i, j) {
    // Check if the square is empty
    if (this.state.board[i][j] === null) {
      const board = this.state.board.slice();
      board[i][j] = this.state.turn;
      this.setState({ board, turn: this.state.turn === 'O' ? 'X' : 'O' });
    }
  }

  render() {
    const board = this.state.board;
    const cells = board.map((row, i) =>
      row.map((col, j) =>
        <Cell
          value={board[i][j]}
          onClick={() => this.handleClick(i, j)}/>));
    return (
      <Board cells={cells} />);
  }
}

class Board extends React.Component {
  render() {
    const cells = this.props.cells.map((row, i) =>
        row.map((cell, j) =>
          <td key={`cell-${i}-${j}`}>{cell}</td>));
    return (
      <div className="board">
        <table>
          <tbody>
            {cells}
          </tbody>
        </table>
      </div>);
  }
}

class Square extends React.Component {
  render() {
    const value = this.props.value;
    return (
      <td
           className={`vertical ${value === 'X' ? 'X' : ''} ${value === 'O' ? 'O' : ''}`}>
        <div className="center">
          {value === 'X' ?
            <div className="X">X</div> :
            <div className="O">O</div>}
        </div>
      </td>);
  }
}

class Cell extends React.Component {
  render() {
    return (
      <td onClick={this.props.onClick}>
        <div className="square">
          <Square value={this.props.value}/>
        </div>
      </td>);
  }
}

export default Game;