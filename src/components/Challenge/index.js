import React, { Component } from 'react';
import ReactGA from 'react-ga';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };

    if (localStorage.getItem(props.challenge.id)) {
      this.state = JSON.parse(localStorage.getItem(props.challenge.id.toString()));
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = this.props.challenge.id.toString();

    this.setState({
      isChecked: value
    }, () => {
      localStorage.setItem(id, JSON.stringify(this.state));
    });

    ReactGA.event({
      category: 'challenge',
      action: 'click',
      label: id,
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
            name={this.props.challenge.id}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} />
          <span dangerouslySetInnerHTML={this.createMarkup()}/>
        </label>
      </li>
    )
  }

}

export default Challenge;
