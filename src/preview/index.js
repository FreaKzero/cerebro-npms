import React, { Component, PropTypes } from 'react';
import Scores from './scores';
import Flags from './flags';
import styles from './styles.css'

export default ({ item, actions }) => (
  <div className={styles.main}>
    <h1>{item.package.name}</h1> <span className={styles.version}>({item.package.version})</span>
    <div><Flags flags={item.flags || {}} /></div>
    <p>{item.package.description}</p>
    
    <Scores 
      popularity={Math.trunc(item.score.detail.popularity * 100)}
      maintenance={Math.trunc(item.score.detail.maintenance * 100)}
      quality={Math.trunc(item.score.detail.quality * 100)}
    />
  </div>
)