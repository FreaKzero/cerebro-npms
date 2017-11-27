import React from 'react';
import Scores from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {   

  const scores ={
    quality: 0.9392171854054061,
    popularity: 0.06060838884010745,
    maintenance: 0.9999999595107407
  };
  
    const actions = {
      open: () => { return; },
      hideWindow: () => { return; }
    }

  const tree = renderer
    .create(<Scores {...scores}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});