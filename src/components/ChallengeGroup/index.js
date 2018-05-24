import React from 'react';
import Challenge from '../Challenge'

function ChallengeGroup(props) {

  var group = props.group;
  var challenges = group.challenges;

  return (
    <div className="challenge-group">
      <h2>{props.group.title}</h2>
      <ul>
        {challenges.map((challenge, index) => {
          return <Challenge key={challenge.id} challenge={challenge}/>
        })}
      </ul>
    </div>
  )
}

export default ChallengeGroup;
