import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header.component';

describe('Header', () => {
  it ('should match the snapshot', () => {
    const tree = renderer.create(<Header />);
    expect(tree).toMatchSnapshot();
  });
})