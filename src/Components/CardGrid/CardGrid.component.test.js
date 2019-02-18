import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardGrid from './CardGrid.component';

describe('CardGrid', () => {
  it ('should match the snapshot', () => {
    const tree = renderer.create(<CardGrid />);
    expect(tree).toMatchSnapshot();
  });
})