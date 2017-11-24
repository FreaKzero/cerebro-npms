import debounce from 'p-debounce';
import request from 'request-promise-native';
import {memoize} from 'cerebro-tools';
import { CONFIG_MEMOIZE, CONFIG_DEBOUNCE } from './constants';

const packagesRequest = (query) => request({
  url: 'https://api.npms.io/v2/search',
  qs: { q: query },
  json: true
}).then(data => data.results);

export const termFilter = (term) => {
  const match = term.match(new RegExp(/^npms\s*(.*)/, 'i'));
  return {
    hasTerm: Boolean(match && match[1]),
    term: match[1].replace(/"/g, '\\"'),
    cmd: match[0]
  } 
}

export const getPackages = debounce(
  memoize(
    packagesRequest,
    CONFIG_MEMOIZE
  ), CONFIG_DEBOUNCE
);

export const getColor = (percentage) => {
  // red 	#BE1C1C
  // orange #FFA500
  // green #77ab59
  let color;
  if (percentage < 30) {
    color = '#d41243'
  } else if (percentage < 60) {
    color = '#FFA500'
  } else {
    color = '#77ab59'
  }
  return color;
}