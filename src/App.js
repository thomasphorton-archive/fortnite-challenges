import React, { Component } from 'react';
import './App.css';
import ChallengeGroup from './components/ChallengeGroup';
import Challenges from './challenges.json';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header>
          <h1>Fortnite Challenge Checklist</h1>
        </header>

        <ChallengeGroup
          key={Challenges.id}
          id={Challenges.id}
          data={Challenges}
        />

      </div>
    );
  }
}

export default App;
