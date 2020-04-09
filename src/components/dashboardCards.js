import React from 'react';
import { CardsContainer } from 'styles/components';
import Card from 'components/card';

const DashboardCards = () => (
  <CardsContainer>
    <Card image="home.png" text="Home" url="/"/>
    <Card image="tasks.png" text="Tasks" url="/tasks"/>
    <Card image="projects.png" text="Projects" url="/projects"/>
  </CardsContainer>
);

export default DashboardCards;