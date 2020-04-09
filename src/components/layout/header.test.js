import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';
import Tasks from "containers/tasks";

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<Header />);
  });

  it('should render an H1 element', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should contain the title', () => {
    expect(wrapper.text()).toContain('Jaxi Admin');
  });

  it('should render a nav element', () => {
    expect(wrapper.find('nav')).toHaveLength(1);
  });

  it('should render three li elements', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });
});