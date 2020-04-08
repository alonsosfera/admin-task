import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
  import { BrowserRouter } from 'react-router-dom';

import Dashboard from './dashboard';
import DashboardCards from 'components/dashboardCards';
import Card from 'components/card';

configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {
  it('should render an H1 element', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h1')).toHaveLength(1);
  })
});

describe('<Dashboard />', () => {
  it('should contain the title', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.text()).toContain('Welcome to the Dashboard');
  })
});

describe('<Dashboard />', () => {
  it('should render a <DashboardCards /> element', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(DashboardCards)).toHaveLength(1);
  })
});

describe('<Dashboard />', () => {
  it('should render three <Card /> components', () => {
    const wrapper = mount(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(wrapper.find(Card)).toHaveLength(3);
  })
});