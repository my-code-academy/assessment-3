import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from './Card.component';

describe('Card', () => {
  it ('should match the snapshot', () => {
    const tree = renderer.create(<Card />);
    expect(tree).toMatchSnapshot();
  });
})