import styled from 'styled-components';
import { WEDGEWOOD } from 'styles/colors';

export const HeaderContainer = styled.header`
  display: flex;
  height: 4rem;
  margin: 2rem auto;
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