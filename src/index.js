import debounce from 'debounce';
import request from 'request-promise-native';
import React from 'react';
import Preview from './preview';
import SubTitle from './preview/subtitle';
import styles from './preview/styles.css';

export const fn = ({ term, display, actions }) => {
  let match = term.match(new RegExp(/^npms\s*(.*)/, 'i'));
  if (match) {
    debounce(
      request({
        url: 'https://api.npms.io/v2/search',
        qs: { q: match[1].replace(/"/g, '\\"') },
        json: true
      }).then(data => {
        data.results.forEach(item => {
          display({
            title: item.package.name,
            subtitle: <SubTitle item={item} />,
            getPreview: () => (
              <Preview item={item} actions={ actions } />
            ),
            onSelect: event => {
              actions.open(item.package.links.npm);
            }
          })
        });
      })
    , 500);
  }
  
}