import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Projects from './projects';
import NewRow from 'components/newRow';
import Table from 'components/table';

configure({ adapter: new Adapter() });

describe('<Projects />', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<Projects />);
  });

  it('should render an H1 element', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should contain the title', () => {
    expect(wrapper.text()).toContain('PROJECTS');
  });

  it('should render a <NewRow /> component', () => {
    expect(wrapper.find(NewRow)).toHaveLength(1);
  });

  it('should render a <Table /> component', () => {
    expect(wrapper.find(Table)).toHaveLength(1);
  });
});

describe('<Projects />', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper = mount(<Projects />);
  });

  it('should render and set state', () => {
    expect(wrapper.text()).toContain('JavaScript');
  });

  it('should remove an item', () => {
    expect(wrapper.find('tbody tr')).toHaveLength(1);
    wrapper
      .find('td button')
      .last()
      .simulate('click');
    expect(wrapper.find('tbody tr')).toHaveLength(0);
  });

  it('should add an item', () => {
    expect(wrapper.find('tbody tr')).toHaveLength(1);
    wrapper
      .find('div button')
      .first()
      .simulate('click');
    expect(wrapper.find('tbody tr')).toHaveLength(2);
  });
});