import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [down, downAmount] = useState(0);
  const [quarter, quarterAmount] = useState(0);
  const [toGo, toGoAmount] = useState(0);
  const [ballOn, ballOnAmount] = useState(0);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={() => downAmount(down + 1)} className="down__add">Down Add</button>
        <button onClick={() => downAmount(0)} className="down__reset">Down Reset</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={() => quarterAmount(quarter + 1)} className="quarter__add">Quarter Add</button>
        <button onClick={() => quarterAmount(0)} className="quarter__reset">Quarter Reset</button>
      </div>
    </div>
  );
};

export default BottomRow;
