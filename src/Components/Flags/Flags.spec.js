import React from 'react';
import Flags from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {   

  const flags = {
    flags: {
      deprecated: true
    }
  }
  
    const actions = {
      open: () => { return; },
      hideWindow: () => { return; }
    }

  const tree = renderer
    .create(<Flags flags={flags} size='big' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});