import React, { useState } from "react";
import "./InputTip.css";

const InputTip = (props) => {
  const [bill, setBill] = useState("");
  const [tipPercent, setTip] = useState("");
  const [numOfPeople, setnumOfPeople] = useState("");

  console.log(bill, tipPercent, numOfPeople);

  const billHandler = (event) => {
    setBill(event.target.value);
  };

  const tip5Handler = (event) => {
    setTip(event.target.value);
  };
  const tip10Handler = (event) => {
    setTip(event.target.value);
  };
  const tip15Handler = (event) => {
    setTip(event.target.value);
  };
  const tip25Handler = (event) => {
    setTip(event.target.value);
  };
  const tip50Handler = (event) => {
    setTip(event.target.value);
  };
  const customTipHandler = (event) => {
    setTip(event.target.value);
  };
  const numOfPeopleHandler = (event) => {
    setnumOfPeople(event.target.value);
  };

  const toito = () => {
    if (bill && tipPercent && numOfPeople) {
      const tipValues = {
        bill: bill,
        tipPercent: tipPercent,
        numOfPeople: numOfPeople,
      };
      props.onTipValues(tipValues);
    }
  };

  return (
    <div onMouseOut={toito} className="input-container">
      <form id="my-form" className="bill-box">
        <label className="bill-label">Bill</label>
        <input
          onInput={billHandler}
          className="input-bill"
          type="number"
          placeholder="0"
          min="0"
          value={bill}
        />
      </form>
      <form className="select-tip">
        <label className="tip-label">Select Tip %</label>
        <div className="percent-options">
          <button
            onClick={tip5Handler}
            value={5}
            className="btn-5"
            type="button"
          >
            5
          </button>
          <button
            onClick={tip10Handler}
            value={10}
            className="btn-10"
            type="button"
          >
            10
          </button>
          <button
            onClick={tip15Handler}
            value={15}
            className="btn-15"
            type="button"
          >
            15
          </button>
          <button
            onClick={tip25Handler}
            value={25}
            className="btn-25"
            type="button"
          >
            25
          </button>
          <button
            onClick={tip50Handler}
            value={50}
            className="btn-50"
            type="button"
          >
            50
          </button>
          <input
            onInput={customTipHandler}
            id="custom"
            className="input-custom"
            type="number"
            placeholder="Custom"
            min="0"
            max="100"
          />
        </div>
      </form>
      <form id="my-form" className="num-of-people-box">
        <label>
          Number of People<span>Can't be zero</span>
        </label>
        <input
          onInput={numOfPeopleHandler}
          id="people-count"
          className="input-people"
          type="number"
          aria-required="true"
          placeholder="0"
          min="0"
          max="100"
          required
          value={numOfPeople}
        />
      </form>
    </div>
  );
};

export default InputTip;
