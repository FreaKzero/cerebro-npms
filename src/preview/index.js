import React, { Component, PropTypes } from 'react';
import Scores from '../Scores';
import Flags from '../Flags';
import ReactMarkdown from 'react-markdown';
import styles from './styles.css'

export default ({ item, actions }) => (
  <div className={styles.main}>
    <h1>{item.package.name}</h1> <span className={styles.version}>({item.package.version})</span>
    <div><Flags flags={item.flags || {}} /></div>
    <ReactMarkdown source={item.package.description} />
    <Scores
      popularity={Math.trunc(item.score.detail.popularity * 100)}
      maintenance={Math.trunc(item.score.detail.maintenance * 100)}
      quality={Math.trunc(item.score.detail.quality * 100)}
    />
  </div>
)