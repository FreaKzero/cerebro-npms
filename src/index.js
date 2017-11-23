import debounce from 'debounce';
import request from 'request-promise-native';
import React from 'react';
import Preview from './Preview';
import Subtitle from './Subtitle';
import styles from './Preview/styles.css';

export const fn = ({ term, display, actions }) => {
  let match = term.match(new RegExp(/^npms\s*(.*)/, 'i'));

  if (match && match[1]) {
    let q = match[1].replace(/"/g, '\\"');

    if (q.trim().length > 1) {
      debounce(
        request({
          url: 'https://api.npms.io/v2/search',
          qs: { q },
          json: true
        }).then(data => {
          if (data.results.length < 1) {
            display({
              title: `No packages with query ${q} found`
            });
          } else {
            data.results.forEach(item => {
              display({
                title: item.package.name,
                subtitle: <Subtitle item={item} />,
                getPreview: () => (
                  <Preview item={item} actions={ actions } />
                ),
                onSelect: event => {
                  actions.open(item.package.links.npm);
                }
              })
            });
          }
        })
      , 500);
    }
  }

}