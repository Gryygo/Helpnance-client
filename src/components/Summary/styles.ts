import styled from "styled-components";

export const SummaryContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--box-color);
        padding: 1.5rem 2rem;
        border-radius: .25rem;
        color: var(--text-title);
        box-shadow: 0 .5rem 15px rgba(0, 0, 0, 0.1);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            font-size: 1.2rem;

            .icon {
                font-size: 2.5rem;
            }
        }

        strong {
            display: inline-block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 600;
        }
    }

    .income_div {
        background: var(--green);
        color: #fff;
    }
    .outcome_div {
        background: var(--red);
        color: #fff;
    }
`;
