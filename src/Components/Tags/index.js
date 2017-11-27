import React, { Component, PropTypes } from 'react';
import tagImg from '../../assets/tag.png';
import styles from './styles.css';

export default ({ item }) => (
  <div className={styles.tags}>
    {item.package.keywords ? item.package.keywords.map((item, idx) => (
      <span className='tag' key={idx}>
        <img 
          src={tagImg} 
          className={styles.tagIcon}
        />&nbsp;
        {item}
      </span>
    )): ''}
  </div>
)