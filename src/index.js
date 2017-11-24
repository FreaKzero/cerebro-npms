import debounce from 'p-debounce';
import request from 'request-promise-native';
import React from 'react';
import Preview from './Preview';
import Subtitle from './Subtitle';
import {memoize} from 'cerebro-tools';
import styles from './Preview/styles.css';
import icon from './assets/npms-logo.png';

const mem = 60000;
const deb = 500;

const packagesRequest = (query) => request({
      url: 'https://api.npms.io/v2/search',
      qs: { q: query },
      json: true
    }).then(data => data.results);
  

const getPackages = debounce(memoize(packagesRequest, mem), deb);

export const fn = ({ term, display, actions, hide }) => {
  let match = term.match(new RegExp(/^npms\s*(.*)/, 'i'));

  if (match && match[1]) {
    let query = match[1].replace(/"/g, '\\"');

    display({
      icon,
      id: 'npms-plugin-search',
      title: `Searching npms for ${query}`
    });

    if (query.trim().length > 1) {
      getPackages(query).then(data => {
        hide('npms-plugin-search')
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
      });
    }
  }

}