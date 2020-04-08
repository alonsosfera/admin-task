import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './layout';
import Header from './header';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  it('should render a <Header /> element', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find(Header)).toHaveLength(1);
  })
});

describe('<Layout />', () => {
  it('should render a main element', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('main')).toHaveLength(1);
  })
});