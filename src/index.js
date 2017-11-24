import React from 'react';
import Preview from './Preview';
import Subtitle from './Subtitle';
import styles from './Preview/styles.css';
import icon from './assets/npms-logo.png';
import {getPackages} from './lib';

export const fn = ({ term, display, actions, hide }) => {
  let match = term.match(new RegExp(/^npms\s*(.*)/, 'i'));

  if (match && match[1]) {
    let query = match[1].replace(/"/g, '\\"');

    display({
      icon,
      id: 'npms-plugin-meta',
      title: `Searching npms for ${query}`
    });
    
    getPackages(query).then(data => {
      hide('npms-plugin-meta')
      if (data.length > 0) {
        data.forEach(item => {
          display({
            icon,
            title: item.package.name,
            subtitle: <Subtitle item={item} />,
            getPreview: () => <Preview item={item} actions={ actions } />,
            onSelect: event => {
              actions.open(item.package.links.npm);
            }
          })
        });
      } else {
        display({
          icon,
          id: 'npms-plugin-meta',
          title: `No packages found`
        });
      }
    });
  }

}