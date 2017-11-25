import React, { Component, PropTypes } from 'react';
import { KeyboardNav, KeyboardNavItem } from 'cerebro-ui'

const Preview = ({ items, onSelect }) => (
  <KeyboardNav>
    <ul className={styles.list}>
    {
      items.map(s => (
        <KeyboardNavItem key={s} onSelect={() => onSelect(item)}>
          {item}
        </KeyboardNavItem>
      ))
    }
    </ul>
  </KeyboardNav>
)

const openUrl = () => {}
export default ({ item, actions }) => (
  <footer className='card-footer'>
    {Object.keys(item.package.links).map((name, idx) => 
      <KeyboardNavItem 
        key={idx} 
        onSelect={() => { 
          actions.open(item.package.links[name]); 
          return actions.hideWindow();
        }}
        className='card-footer-item'
      >
        <a>{name}</a>
      </KeyboardNavItem>
    )}
  </footer>
)