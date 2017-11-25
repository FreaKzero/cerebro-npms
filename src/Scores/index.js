import React, { Component, PropTypes } from 'react';
import {Circle} from 'rc-progress';
import {getColor} from '../lib';
import styles from './styles.css'

export default ({ popularity, maintenance, quality }) => (
    <div className={styles.scores}>
      <div>
        <p>Quality</p>
        <h4 style={{color: getColor(quality)}}>{quality}%</h4>
        <Circle
          percent={quality}
          strokeWidth="10"
          strokeColor={getColor(quality)}
          strokeLinecap="butt"
        />
      </div>
      <div>
        <p>Maintenance</p>
        <h4 style={{color: getColor(maintenance)}}>{maintenance}%</h4>
        <Circle
          percent={maintenance}
          strokeWidth="10"
          strokeColor={getColor(maintenance)}
          strokeLinecap="butt"
        />
      </div>
      <div>
        <p>Popularity</p>
        <h4 style={{color: getColor(popularity)}}>{popularity}%</h4>
        <Circle
          percent={popularity}
          strokeWidth="10"
          strokeColor={getColor(popularity)}
          strokeLinecap="butt"
        />
      </div>
    </div>
)