import React, {Component} from 'react';
import './TicTacToe.css';

function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends Component {
    renderSquare(i) {
        return (
            <Square 
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
    
    renderBoard() {
        let board = [];
        for (let i = 0; i < 3; i++) {
            let squares = [];
            for (let j = 0; j < 3; j++) {
                squares.push(this.renderSquare(i*3+j));
            }
            board.push(
                <div key={i} className="board-row row">
                    {squares}
                </div>
            );
        }

        return board;
    }

    render() {
        return (
            <div>
                {this.renderBoard()}    
            </div>
        );
    }
}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                lastMove: null,
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1]
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const lastMove = '(' + ~~(i / 3) + ', ' + i % 3 + ')'
        this.setState({
            history: history.concat([{
                squares: squares,
                lastMove: lastMove,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move + ' - ' + 
                    (move % 2 === 0 ? 'O @ ' : 'X @ ') + 
                    history[move].lastMove :
                'Go to game start';

            let buttonClasses = "m-2 btn btn-sm btn-";
            move ? 
                buttonClasses += "secondary" :
                buttonClasses += "primary";

            return (
                <li key={move}>
                    <button 
                        className={buttonClasses}
                        onClick={() => this.jumpTo(move)}>
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        
        return (
            <div className="game container">
            <div className="row">
                <div className="col-sm-6">
                    <Board 
                        className="mx-auto"
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="col-sm-6">
                    <div className="lead mt-3">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
            </div>
        );
    }
}

function TicTacToe(props) {
    return (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Tic Tac Toe</h2>
            <Game />
          </div>
        </div>
    );
}

// ========================================

function calculateWinner(squares) {
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTacToe;
