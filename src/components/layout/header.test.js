import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render an H1 element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  })
});

describe('<Header />', () => {
  it('should contain the title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.text()).toContain('Jaxi Admin');
  })
});

describe('<Header />', () => {
  it('should render a nav element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav')).toHaveLength(1);
  })
});

describe('<Header />', () => {
  it('should render three li elements', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('li')).toHaveLength(3);
  })
});