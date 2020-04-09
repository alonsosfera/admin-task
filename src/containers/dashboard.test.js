import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './dashboard';
import DashboardCards from 'components/dashboardCards';
import Card from 'components/card';

configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper = shallow(<Dashboard />);
  });

  it('should render an H1 element', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should contain the title', () => {
    expect(wrapper.text()).toContain('Welcome to the Dashboard');
  });

  it('should render a <DashboardCards /> element', () => {
    expect(wrapper.find(DashboardCards)).toHaveLength(1);
  });
});

describe('<Dashboard />', () => {
  let wrapper;

  beforeEach(() =>{
    wrapper = mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  });

  it('should render three <Card /> components', () => {
    expect(wrapper.find(Card)).toHaveLength(3);
  });
});