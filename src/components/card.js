import React from 'react';
import { CardContainer } from 'styles/components';

const Card = ({ image, text, url }) => (
  <CardContainer to={url} image={image}>
    <h2>{text}</h2>
  </CardContainer>
);

export default Card;