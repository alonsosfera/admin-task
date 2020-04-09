import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MATISSE, PALE_AQUA, PERIWINKLE_GRAY, SUCCESS, WEDGEWOOD } from 'styles/colors';

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
  
  @media screen and (max-width: 768px) {
    width: 80%;
    
    h1{
      font-size: 1.5rem;
    }
    
    nav {
      width: 11rem;
      justify-content: space-between;
      
      a{
        font-size: 0.9rem;
      }
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-evenly;
  width: 60%;
  height: 15rem;
  
  @media screen and (max-width: 768px) {
    height: 40rem;
    flex-direction: column;
  }
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
  
  @media screen and (max-width: 768px) {
    height: 11rem;
    background-size: 60%;
  }
`;

export const NewRowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: ${({ show }) => show ? '3' : '0'}rem;
  transition: 0.3s;
  
  div {
    display: ${({ show }) => show ? '0' : 'none'}
    input {
      border-radius: 3px;
      font-size: 1.1rem;
    }
  }
  
  button {
    display: ${({ show }) => show ? '0' : 'none'}
    font-size: 1rem;
    height: 1.5rem;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    background-color: ${SUCCESS};
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: ${({ show }) => show ? '10' : '0'}rem;
    div {
      display: ${({ show }) => show ? '0' : 'none'}
    }
    
    button {
      display: ${({ show }) => show ? '0' : 'none'}
    }
  }
`;

export const TableContainer = styled.table`
  border: 1px solid lightgray;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  
  th {
    height: 2rem;
    background-color: #808D8E;
  }
  
  td {
    height: 1.5rem;
    text-align: center;
    
    button {
      margin-right: 0.5rem;
      font-size: 0.9rem;
      border-radius: 3px;
    }
  }
  
  tr:nth-child(odd){
    background-color: ${PALE_AQUA};
  }
  
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    
    td > button {
      font-size: 0.7rem;
    }
  }
`;