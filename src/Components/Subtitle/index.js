import React, { Component, PropTypes } from 'react';
import {getColor} from '../../lib';
import Flags from '../Flags';
import styles from './styles.css';

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