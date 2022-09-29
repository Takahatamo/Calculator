import React, { useState, useEffect } from 'react';
import "./calculator.css";
import CalcButton from './buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
    const [totals, setTotals] = useState({});
    useEffect(() => {
        setTotals({
            total: null,
            next: null,
            operation: null,
        });
    }, []);
    
    const handleClick = (event) => {
        setTotals(calculate(totals, event.target.textContent));
    }

    return (
      <div>
        <h3 className="letsStyle">Math</h3>
        <div className="calculator-container">
          <div className="display" id="display">
            <span className="hint">
              {totals.total}
              {totals.operation}
              {totals.next}
            </span>
            <span className="total">{totals.next ?? totals.total ?? 0}</span>
          </div>
          <div className="button-grid">
            <CalcButton
              myFunc={handleClick}
              buttonName="AC"
              buttonClasses="btnClear"
              id="clear"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="+/-"
              buttonClasses="btnPlusMinus"
              id="plus-minus"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="%"
              buttonClasses="btnModulo"
              id="modulo"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="/"
              buttonClasses="btnDivide"
              id="divide"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="7"
              buttonClasses="btnSeven"
              id="seven"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="8"
              buttonClasses="btnEight"
              id="eight"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="9"
              buttonClasses="btnNine"
              id="nine"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="x"
              buttonClasses="btnMultiply"
              id="multiply"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="4"
              buttonClasses="btnFour"
              id="four"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="5"
              buttonClasses="btnFive"
              id="five"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="6"
              buttonClasses="btnSix"
              id="six"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="-"
              buttonClasses="btnSubtract"
              id="subtract"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="1"
              buttonClasses="btnOne"
              id="one"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="2"
              buttonClasses="btnTwo"
              id="two"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="3"
              buttonClasses="btnThree"
              id="three"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="+"
              buttonClasses="btnAdd"
              id="add"
            />
          </div>
          <div className="bottom-container">
            <CalcButton
              myFunc={handleClick}
              buttonName="0"
              buttonClasses="btnZero"
              id="zero"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="."
              buttonClasses="btnDecimal"
              id="decimal"
            />
            <CalcButton
              myFunc={handleClick}
              buttonName="="
              buttonClasses="btnEqual"
              id="equals"
            />
          </div>
        </div>
      </div>
    );
}
export default Calculator;