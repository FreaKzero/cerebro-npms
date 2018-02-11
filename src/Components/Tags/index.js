import React, { Component, PropTypes } from 'react';
import tagImg from '../../assets/tag.png';
import styles from './styles.css';

export default ({ item, actions }) => (
  <div className={styles.tags}>
    {item.package.keywords ? item.package.keywords.map(item => (
      <span className={styles.tag}>
        <img 
          src={tagImg} 
          className={styles.tagIcon}
        />&nbsp;
        {item}
      </span>
    )): ''}
  </div>
)