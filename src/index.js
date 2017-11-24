import React from 'react';
import Preview from './Preview';
import Subtitle from './Subtitle';
import styles from './Preview/styles.css';
import icon from './assets/npms-logo.png';
import {getPackages, termFilter} from './lib';
import {CONFIG_META_DISPLAY_ID} from './constants';

export const fn = ({ term, display, actions, hide }) => {
  const npmsTerm = termFilter(term);
  if (npmsTerm.hasTerm) {
    display({
      icon,
      id: CONFIG_META_DISPLAY_ID,
      title: `Searching npms for ${npmsTerm.term}`,
      onSelect: event => {
        actions.open(`https://npms.io/search?q=${npmsTerm.term}`);
      }
    });
    
    getPackages(npmsTerm.term).then(data => {
      hide(CONFIG_META_DISPLAY_ID)
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
          id: CONFIG_META_DISPLAY_ID,
          title: `No packages found`
        });
      }
    });
  }

}