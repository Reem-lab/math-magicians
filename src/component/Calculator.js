import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            {total}
            {operation}
            {next}
          </div>

          <div className="order">
            <div className="order2">
              <div className="digits">
                <div className="signal">
                  <button type="button" onClick={this.clickHandler}>AC</button>
                  <button type="button" onClick={this.clickHandler}>+/-</button>
                  <button type="button" onClick={this.clickHandler}>%</button>
                </div>
              </div>

              <div className="numbers">
                <button type="button" onClick={this.clickHandler}>1</button>
                <button type="button" onClick={this.clickHandler}>2</button>
                <button type="button" onClick={this.clickHandler}>3</button>
                <button type="button" onClick={this.clickHandler}>4</button>
                <button type="button" onClick={this.clickHandler}>5</button>
                <button type="button" onClick={this.clickHandler}>6</button>
                <button type="button" onClick={this.clickHandler}>7</button>
                <button type="button" onClick={this.clickHandler}>8</button>
                <button type="button" onClick={this.clickHandler}>9</button>
              </div>

              <div className="signal">
                <button className="zero" type="button" onClick={this.clickHandler}>
                  0
                </button>
                <button type="button" onClick={this.clickHandler}>.</button>
              </div>
            </div>

            <div className="operators">
              <button type="button" onClick={this.clickHandler}>÷</button>
              <button type="button" onClick={this.clickHandler}>x</button>
              <button type="button" onClick={this.clickHandler}>-</button>
              <button type="button" onClick={this.clickHandler}>+</button>
              <button type="button" onClick={this.clickHandler}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
