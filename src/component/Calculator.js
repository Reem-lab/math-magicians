import React from 'react';

class App extends React.Component {
  render() {
    const createDigits = () => {
      const digits = [];
      for (let i = 1; i <= 9; i += 1) {
        digits.push(<button type="button" key={i}>{i}</button>);
      }
      return digits;
    };

    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            <span>0</span>
          </div>

          <div className="order">

            <div className="order2">

              <div className="digits">

                <div className="signal">

                  <button type="button">ِAC</button>
                  <button type="button">+/-</button>
                  <button type="button">%</button>

                </div>

              </div>

              <div className="numbers">{createDigits()}</div>

              <div className="signal">

                <button className="zero" type="button">0</button>
                <button type="button">.</button>

              </div>

            </div>

            <div className="operators">
              <button type="button">÷</button>
              <button type="button">×</button>
              <button type="button">-</button>
              <button type="button">+</button>
              <button type="button">=</button>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
