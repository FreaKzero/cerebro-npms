import React, { Component, PropTypes } from 'react';
import { KeyboardNav, KeyboardNavItem } from 'cerebro-ui'
import styles from './styles.css';

export default ({ item, actions }) => (
  <footer className={styles.cardFooter}>
    {item.package.links ? Object.keys(item.package.links).map((name, idx) => 
      <KeyboardNavItem 
        key={idx} 
        className={styles.cardFooterItem}
        onSelect={() => { 
          actions.open(item.package.links[name]); 
          return actions.hideWindow();
        }}
      >
        <a>{name}</a>
      </KeyboardNavItem>
    ): ''}
  </footer>
)