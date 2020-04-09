import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './layout';
import Header from './header';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<Layout />);
  });

  it('should render a <Header /> element', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render a main element', () => {
    expect(wrapper.find('main')).toHaveLength(1);
  })
});