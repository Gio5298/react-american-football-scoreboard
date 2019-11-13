//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, scoreCountHome] = useState(0);
  const [awayScore, scoreCountAway] = useState(0);
  // const [timer, timerCount] = useState(0);
  // console.log(useState)
  // console.log(homeScore)
  // console.log(scoreCountHome)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => scoreCountHome(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => scoreCountHome(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={() => scoreCountHome(0)} className="homeButtons__reset">Home Reset</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => scoreCountAway(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => scoreCountAway(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick={() => scoreCountAway(0)} className="awayButtons__reset">Away Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;
