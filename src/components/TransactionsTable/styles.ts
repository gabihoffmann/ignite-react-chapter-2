import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0; 

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-size: 1rem;
      font-weight: normal;
      padding: 1rem 2rem;
      color: var(--text-body);
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      background: var(--shape);
      border: 0;
      padding: 1rem 2rem;
      color: var(--text-body);
      
      &:first-child{
        color: var(--text-title);
        border-radius: 0.5rem 0 0 0.5rem;
      } 

      &:last-child{
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.deposit{
        color: var(--green);
      }

      &.withdraw{
        color: var(--red);
      }
    }

  }
`