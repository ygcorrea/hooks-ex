import React, { useState } from "react";

const App = () => {
  const [firstCircle, setFirstCircle] = useState("gray");
  const [secondCircle, setSecondCircle] = useState("gray");
  const [thirdCircle, setThirdCircle] = useState("gray");

  const changeColorClass = (setColor, name, resetColors) => {
    setColor(name);
    resetColors.forEach(resetColor => resetColor("gray"));
  };

  return (
    <>
      <div className="Container">
        <button
          className={`Circles ${firstCircle}`}
          onClick={() =>
            changeColorClass(setFirstCircle, "Red", [
              setSecondCircle,
              setThirdCircle
            ])
          }
        />
        <button
          className={`Circles ${secondCircle}`}
          onClick={() =>
            changeColorClass(setSecondCircle, "Yellow", [
              setFirstCircle,
              setThirdCircle
            ])
          }
        />
        <button
          className={`Circles ${thirdCircle}`}
          onClick={() =>
            changeColorClass(setThirdCircle, "Green", [
              setFirstCircle,
              setSecondCircle
            ])
          }
        />
      </div>
    </>
  );
};
export default App;