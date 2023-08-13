import React from "react";
import { MainButtons } from "./MainButtons";
export const Body = ({setProgress , setResult , progress , result}) => {
  const Clear =()=>{
    setProgress('')
    setResult('')
  }
  return (
    <div className="Calculator-body">
      <div className="controllers">
        <div className="row-1">
          <button onClick={Clear}>Clear</button>
        </div>
      </div>
      <div className="buttons">
        <MainButtons setProgress={setProgress} setResult={setResult} progress={progress} result={result} />
      </div>
    </div>
  );
};
