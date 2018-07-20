import React, { Component } from 'react';
import ReactGA from 'react-ga';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };

    console.log(props);

    if (localStorage.getItem(props.id)) {
      this.state = JSON.parse(localStorage.getItem(props.id.toString()));
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = this.props.id.toString();

    this.setState({
      isChecked: value
    }, () => {
      localStorage.setItem(id, JSON.stringify(this.state));
    });

    ReactGA.event({
      category: 'challenge',
      action: 'click',
      label: this.props.id,
      value: 1
    });
  }

  createMarkup() {
    return {
      __html: this.props.challenge.text
    }
  }

  render() {
    return (
      <li>
        <label>
          <input
            name={this.props.id}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} />
          <span dangerouslySetInnerHTML={this.createMarkup()}/>

          {this.props.challenge.max &&
              <span>   (0/{this.props.challenge.max})</span>
          }

          {this.props.challenge.difficulty === 'hard' &&
              <span>   (HARD)</span>
          }
        </label>
      </li>
    )
  }

}

export default Challenge;
