import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  function clickHandler(e) {
    const result = calculate({ total, next, operation }, e.target.textContent);

    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  }

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
                <button type="button" onClick={clickHandler}>AC</button>
                <button type="button" onClick={clickHandler}>+/-</button>
                <button type="button" onClick={clickHandler}>%</button>
              </div>
            </div>

            <div className="numbers">
              <button type="button" onClick={clickHandler}>1</button>
              <button type="button" onClick={clickHandler}>2</button>
              <button type="button" onClick={clickHandler}>3</button>
              <button type="button" onClick={clickHandler}>4</button>
              <button type="button" onClick={clickHandler}>5</button>
              <button type="button" onClick={clickHandler}>6</button>
              <button type="button" onClick={clickHandler}>7</button>
              <button type="button" onClick={clickHandler}>8</button>
              <button type="button" onClick={clickHandler}>9</button>
            </div>

            <div className="signal">
              <button className="zero" type="button" onClick={clickHandler}>
                0
              </button>
              <button type="button" onClick={clickHandler}>.</button>
            </div>
          </div>

          <div className="operators">
            <button type="button" onClick={clickHandler}>÷</button>
            <button type="button" onClick={clickHandler}>x</button>
            <button type="button" onClick={clickHandler}>-</button>
            <button type="button" onClick={clickHandler}>+</button>
            <button type="button" onClick={clickHandler}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
