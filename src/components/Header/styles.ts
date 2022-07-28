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

  .theme_toggle {
    border-radius: 2rem;
    width: 3.5rem;
    padding: 0 0rem;
    position: relative;
    font-size: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .theme_icon {
      margin: 0 0.7rem;
    }
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
