import styled from "styled-components";

export const Container = styled.div`
  background: var(--purple);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background: var(--purple-light);

    border: 0;
    padding: 0rem 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.6);
      cursor: pointer;
    }
  }
`