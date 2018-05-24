import React, { Component } from 'react';
import './App.css';
import ChallengeGroup from './components/ChallengeGroup';
import Challenges from './challenges.json';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header>
          <h1>Fortnite Challenge Checklistt</h1>
        </header>

        {Challenges.map((group, index) => {
            return <ChallengeGroup key={group.id} group={group}/>
        })}

      </div>
    );
  }
}

export default App;
