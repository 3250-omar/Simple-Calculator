import React from "react";
import * as math from "mathjs";
export const MainButtons = ({ setProgress, setResult, progress, result }) => {
  const Add_Digit = (val) => {
    setProgress((progress) => [...progress, val]);
  };

  const GetResult = () => {
    if (progress !== "") {
      const Input = progress.join("");
      setResult(math.evaluate(Input));
      setProgress("");
    } else {
      setResult("Enter The Operation");
    }
  };
  return (
    <>
      <div className="main-buttons">
        <button className="numbers" onClick={() => Add_Digit("7")}>
          7
        </button>
        <button className="numbers" onClick={() => Add_Digit("8")}>
          8
        </button>
        <button className="numbers" onClick={() => Add_Digit("9")}>
          9
        </button>
        <button className="operations" onClick={() => Add_Digit("/")}>
          /
        </button>
        <button className="operations" onClick={() => Add_Digit("*")}>
          X
        </button>

        <button className="numbers" onClick={() => Add_Digit("4")}>
          4
        </button>

        <button className="numbers" onClick={() => Add_Digit("5")}>
          5
        </button>

        <button className="numbers" onClick={() => Add_Digit("6")}>
          6
        </button>
        <button className="operations" onClick={() => Add_Digit("^2")}>
          x^2
        </button>
        <button className="operations" onClick={() => Add_Digit("-")}>
          -
        </button>
        <button className="numbers" onClick={() => Add_Digit("1")}>
          1
        </button>
        <button className="numbers" onClick={() => Add_Digit("2")}>
          2
        </button>

        <button className="numbers" onClick={() => Add_Digit("3")}>
          3
        </button>
        <button className="operations" onClick={() => Add_Digit(".")}>
          .
        </button>

        <button className="operations" onClick={() => Add_Digit("+")}>
          +
        </button>
        <button className="numbers" onClick={() => Add_Digit("0")}>
          0
        </button>
        <button
          onClick={GetResult}
          className="span3"
        >
          =
        </button>
      </div>
    </>
  );
};
