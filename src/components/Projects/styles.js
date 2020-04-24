import styled from 'styled-components';

export const Container = styled.main`
    padding: 30px 0;

    border-bottom: 1px solid #ccc;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 8px;

        width: 80%;
        margin: 0 auto;

        li {
            border: 1px solid #eee;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

            display: flex;

            img {
                width: 50%;
                height: 350px;
            }
        }

        @media (max-width: 850px) {
            grid-template-columns: 1fr;
            width: 100%;
        }

        @media (max-width: 600px) {
            img {
                width: 40%;
                height: 300px;
            }
        }
    }
`;

export const Title = styled.strong`
    display: block;
    text-align: center;

    font-size: 24px;
    font-style: italic;
    padding-bottom: 20px;
`;

export const Info = styled.div`
    flex: 1;
    padding: 20px 10px;

    strong {
        display: block;
        font-size: 18px;
        font-style: italic;
        margin-bottom: 4px;
    }

    p {
        font-size: 14px;
        color: #a0a0a0;
        margin: 4px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #eee;
        padding-bottom: 4px;
    }

    a {
        display: block;
        text-decoration: none;
        color: #a0a0a0;
        padding: 4px 0;

        &:hover {
            color: #c20008;
        }
    }

    span {
        color: #000;
        font-weight: bold;
    }
`;
