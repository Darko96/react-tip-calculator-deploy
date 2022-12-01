import React, { useState } from "react";
import "./DisplayTip.css";

const DisplayTip = (props) => {
  const bill = props.tipValues.bill;
  const tipPercent = props.tipValues.tipPercent;
  const numOfPeople = props.tipValues.numOfPeople;

  const totalTip = bill * (tipPercent / 100);
  const tipPerPerson = totalTip / numOfPeople;

  const billPerPerson = bill / numOfPeople;
  const totalPerPerson = billPerPerson + tipPerPerson;

  return (
    <form className="display-container">
      <div className="display-tip">
        <div className="tip-amount">
          <p className="tip-description">Tip Amount</p>
          <p className="person-description">/ person</p>
        </div>
        {billPerPerson > 0 ? (
          <p className="amount show-tip">${tipPerPerson.toFixed(2)}</p>
        ) : (
          <p className="amount show-tip">$0.00</p>
        )}
      </div>
      <div className="display-bill">
        <div className="tip-amount">
          <p className="total-description">Total</p>
          <p className="person-description">/ person</p>
        </div>
        {totalPerPerson > 0 ? (
          <p className="amount show-total">${totalPerPerson.toFixed(2)}</p>
        ) : (
          <p className="amount show-total">$0.00</p>
        )}
      </div>
      <button form="my-form" type="submit" className="btn-reset">
        Reset
      </button>
    </form>
  );
};

export default DisplayTip;
