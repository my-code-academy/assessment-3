import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CardGrid from './CardGrid.component';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CardGrid', () => {
  it ('should match the snapshot', () => {
    const tree = renderer.create(<CardGrid />);
    expect(tree).toMatchSnapshot();
  });
  
  it('Should call componentDidMount once', async (done) => {
    const wrapper = shallow(<CardGrid />);
    expect(wrapper.instance().state.booksData).toEqual({});
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.booksData.length).not.toEqual(0);
    done();
  });
})