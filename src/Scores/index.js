import React, { Component, PropTypes } from 'react';
import {Circle} from 'rc-progress';
import {getColor} from '../lib';
import styles from './styles.css'

export default ({ popularity, maintenance, quality }) => (
    <div className={styles.scores}>
      <div>
        <p>Quality</p>
        <h2>{quality}</h2>
        <Circle
          percent={quality}
          strokeWidth="10"
          strokeColor={getColor(quality)}
        />
      </div>
      <div>
        <p>Popularity</p>
        <h2>{popularity}</h2>
        <Circle
          percent={popularity}
          strokeWidth="10"
          strokeColor={getColor(popularity)}
        />
      </div>
      <div>
        <p>Maintenance</p>
        <h2>{maintenance}</h2>
        <Circle
          percent={maintenance}
          strokeWidth="10"
          strokeColor={getColor(maintenance)}
        />
      </div>
    </div>
)