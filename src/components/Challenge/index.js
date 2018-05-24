import React from 'react';
import ReactGA from 'react-ga';

function Challenge(props) {
  function handleClick(e) {
    console.log('clicked');
    ReactGA.event({
      category: 'challenge',
      action: 'click',
      label: props.challenge.id,
      value: 1
    })
  }

  function createMarkup() {
    return {
      __html: props.challenge.text
    }
  }

  return (
    <li>
      <label>
        <input type="checkbox" name="{props.challenge.id}" value="" onClick={handleClick} /> <span dangerouslySetInnerHTML={createMarkup()}/>
      </label>
    </li>
  )
}

export default Challenge;
