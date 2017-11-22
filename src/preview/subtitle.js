import React, { Component, PropTypes } from 'react';
import Flags from './flags';
import styles from './styles.css'

const getColor = (percentage) => {
  // red 	#BE1C1C
  // orange #FFA500
  // green #77ab59
  let color;
  if (percentage < 30) {
    color = '#d41243'
  } else if (percentage < 60) {
    color = '#FFA500'
  } else {
    color = '#77ab59'
  }
  return color;
}

export default ({ item }) => (
  <div>
    <span 
      className={styles.mainscore}
      style={{
        backgroundColor: getColor(Math.trunc(item.score.final * 100))
      }}>
      {Math.trunc(item.score.final * 100)}
    </span>
    <Flags flags={item.flags || {}} />
  </div>
)