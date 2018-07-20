import React, {Component} from 'react';
import Challenge from '../Challenge'

class ChallengeGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    var data = this.props.data;

    return (
      <div className="challenge-group">
        <h2 onClick={this.toggleHidden.bind(this)}>{data.title}</h2>
        {!this.state.isHidden && <ul>
          {
            data.challenges.map((challenge, index) => {

              // Support nested challenges.
              if (Array.isArray(challenge.challenges)) {
                let id = `${this.props.id}.${challenge.id}`;
                return <ChallengeGroup
                  key={id}
                  id={id}
                  data={challenge}
                />

              } else {
                let id = `${this.props.id}.${challenge.id}`;
                return <Challenge
                  key={id}
                  id={id}
                  challenge={challenge}
                />
              }
            }
          )}
        </ul>
      }
      </div>
    )
  }
}

export default ChallengeGroup;
