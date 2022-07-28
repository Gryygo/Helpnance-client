import styled from "styled-components";

export const TableContainer = styled.section`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 .3rem;
    
    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }
    
    td {
      transition: .3s;
      padding: 1rem 2rem;
      text-align: center;
      border: 1px solid var(--bg-color);
      background: var(--box-color);
      color: var(--text-body);
      position: relative;
      animation: td_arrive 0.4s ease-in-out 1 backwards;
      @keyframes td_arrive {
        from {
          opacity: 0;
          top: 2rem;
        }
        to {
          opacity: 1;
          top: 0rem;
        }
      }

      &:first-child {
        color: var(--text-title);
        border-radius: 0.5rem 0 0 0.5rem;
      }
      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.withdraw {
        color: var(--red);
      }
      &.deposit {
        color: var(--green);
      }

      .button_cont {
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-content: center;

        button {
          margin: 0 0rem;
          height: 1.5rem;
          background: transparent;
          border: none;

          &:first-child {
            color: var(--green);
          }
          &:last-child {
            color: var(--red);
          }
          .icons {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
