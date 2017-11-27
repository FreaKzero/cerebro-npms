import React from 'react';
import Preview from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const item =
    {
    package: {
    name: "dlvr",
    scope: "unscoped",
    version: "4.0.5",
    description: "DeLiVeR - Command Line Tool to automate releasing processes on GitHub/GitLab/npm",
    keywords: [
    "npm",
    "release",
    "changelog",
    "cli",
    "gitlab",
    "management"
    ],
    date: "2017-11-25T22:48:02.614Z",
    links: {
    npm: "https://www.npmjs.com/package/dlvr",
    homepage: "https://github.com/freakzero/dlvr#readme",
    repository: "https://github.com/freakzero/dlvr",
    bugs: "https://github.com/freakzero/dlvr/issues"
    },
    author: {
    name: "FreaKzero"
    },
    publisher: {
    username: "freakzero",
    email: "pete@freakzero.com"
    },
    maintainers: [
    {
    username: "freakzero",
    email: "pete@freakzero.com"
    }
    ]
    },
    score: {
    final: 0.6529780775444187,
    detail: {
    quality: 0.9392171854054061,
    popularity: 0.06060838884010745,
    maintenance: 0.9999999595107407
    }
    },
    searchScore: 100000.56
    };
    
    
    const actions = {
      open: () => { return; }
    }

  const tree = renderer
    .create(<Preview item={item} actions={actions} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});