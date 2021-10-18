import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    icon: 'sun icon',
  },
  winter: {
    text: "Brrr, it's chilly!",
    icon: 'snowflake icon',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat < 0 ? 'summer' : 'winter';
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${icon} icon-left massive icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon-right massive icon`} />
    </div>
  );
};

export default SeasonDisplay;
