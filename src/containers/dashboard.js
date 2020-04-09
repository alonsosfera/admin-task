import React from 'react';
import { SectionContainer } from 'styles/containers';
import DashboardCards from '../components/dashboardCards';

const Dashboard = () => {
  return (
    <SectionContainer>
      <article>
        <h1>Welcome to the Dashboard</h1>
        <DashboardCards />
      </article>
    </SectionContainer>
  );
};

export default Dashboard;