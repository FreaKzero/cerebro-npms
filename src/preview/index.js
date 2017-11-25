import React, { Component, PropTypes } from 'react';
import Scores from '../Scores';
import Flags from '../Flags';
import Links from '../Links';
import ReactMarkdown from 'react-markdown';
import styles from './styles.css'

export default ({ item, actions }) => (
  <div className={styles.main}>
    <div className='card' tabIndex='1'>
      <div className='card-header'>
        <span className='card-header-title'>
        <h3>{item.package.name}</h3> 
          ({item.package.version})
        </span> 
      </div>

      <div className='card-content'>
        <div className='content'>
        
        <ReactMarkdown source={item.package.description} />

        <Scores
          popularity={Math.trunc(item.score.detail.popularity * 100)}
          maintenance={Math.trunc(item.score.detail.maintenance * 100)}
          quality={Math.trunc(item.score.detail.quality * 100)}
        />

        </div>
      </div>
      <Links item={item} actions={actions} />
    </div>
  </div>
)