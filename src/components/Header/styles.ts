import styled from "styled-components";

export const HeadContainer = styled.header`
  background: var(--blue);
`;

export const ContentContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img {
    /* border: 1px solid white; */
    width: 200px;
  }
  button {
    font-size: 1rem;
    color: var(--blue);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: .25rem;
    height: 3rem;
    transition: .3s;
    
    
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
