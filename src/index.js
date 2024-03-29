import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
{/* add constructor so that Square can use state */}
class Square extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
      return (
        <button 
        className="square" 
        onClick={() => this.setState({value: 'X'})}>
        {/* change the function above to arrow function {() => console.log("clicked")}  */}
        {/* the property value will be label on button */}
        {/* the props variable is inherited from React.Component */}
        {/* replace this.props with this.state */}

          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  