import React, { Component, PropTypes } from 'react';
import Scores from '../Scores';
import Flags from '../Flags';
import Links from '../Links';
import Tags from '../Tags';
import ReactMarkdown from 'react-markdown';
import styles from './styles.css'

export default ({ item, actions }) => (
  <div className={styles.main}>
    <div className='card' tabIndex='1'>
      
      <div className='card-header'>
        <span className='card-header-title'>
          <div className={styles.headline}>
            <div className={styles.left}>
              <h3>{item.package.name}</h3> <span className={styles.version}>({item.package.version})</span>
              <br />
              <a 
                className={styles.author} 
                onClick={() => actions.open(`https://www.npmjs.com/~${item.package.publisher.username}`)}
              >
                {item.package.publisher.username} &lt;{item.package.publisher.email}&gt;
              </a>
            </div>
            <div className={styles.right}>
              <Flags 
                flags={item.flags || {}} 
                size='big' 
              />
            </div>
          </div>
        </span> 
      </div>

      <div className='card-content'>
        <div className='content'>
          <div className={styles.markdown}>
            {item.package.description ? 
              <ReactMarkdown source={item.package.description} />
              :
              <p>No Description given</p>
            }
            
          </div>
          <Scores
            popularity={Math.trunc(item.score.detail.popularity * 100)}
            maintenance={Math.trunc(item.score.detail.maintenance * 100)}
            quality={Math.trunc(item.score.detail.quality * 100)}
          />
          <Tags item={item} />
        </div>
      </div>
      <Links item={item} actions={actions} />
    </div>
  </div>
)