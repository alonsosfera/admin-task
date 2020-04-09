import styled from 'styled-components';
import { WEDGEWOOD } from './colors';

export const SectionContainer = styled.section`
  height: 30rem;
  margin: 0 2rem;
  
  article {
    display: flex;
    flex-direction: column;
    
    h1 {
      align-self: center;
      font-size: 2rem;
    }
  }
`;

export const EntityContainer = styled(SectionContainer)`
  article > button {
    width: 5rem;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    margin: -1rem 0 1rem 0;
    background-color: ${WEDGEWOOD};
  }
`;