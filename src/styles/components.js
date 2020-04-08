import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MATISSE, PERIWINKLE_GRAY, WEDGEWOOD } from 'styles/colors';

export const HeaderContainer = styled.header`
  display: flex;
  height: 4rem;
  margin: 2rem auto 0 auto;
  width: 90%;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: ${WEDGEWOOD};
  color: white;
    
  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      color: lightgray;
    }
    &:active {
      color: gray;
    }
  }
  
  nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25%;
    font-size: 1.1rem;
    font-weight: bold;
      
    li{
      list-style-type: none;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  width: 60%;
  height: 15rem;
`;

export const CardContainer = styled(Link)`
  display: flex;
  justify-content: center;
  width: 13rem;
  border: 2px solid ${MATISSE};
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s;
  background: url(/images/${({ image }) => image}) top no-repeat;
  background-size: contain;
  
  h2 {
    align-self: flex-end;
    color: ${PERIWINKLE_GRAY};
  }
  
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;