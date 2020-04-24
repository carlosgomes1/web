import styled from 'styled-components';

export const Container = styled.main`
    padding: 30px 0;

    border-bottom: 1px solid #ccc;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

    ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);

        list-style: none;

        li {
            border: 1px solid #ccc;
            border-radius: 6px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

            display: flex;
            flex-direction: column;
            align-items: center;

            margin: 5px;
            padding: 10px;
        }

        @media (max-width: 850px) {
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export const Title = styled.strong`
    margin: 5px 0;
    font-size: 16px;
    font-style: italic;
`;

export const Description = styled.p`
    text-align: center;
`;
