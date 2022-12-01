import React, { useState } from "react";
import InputTip from "./Components/InputTip";
import DisplayTip from "./Components/DisplayTip";

const App = () => {
  const [tipValue, setTipValue] = useState("");

  const getTipValues = (tipValues) => {
    setTipValue(tipValues);
  };

  return (
    <main>
      <div className="container">
        <InputTip onTipValues={getTipValues} />
        <DisplayTip tipValues={tipValue} />
      </div>
    </main>
  );
};

export default App;
