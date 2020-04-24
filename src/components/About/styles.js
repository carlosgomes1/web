import styled from 'styled-components';

export const Container = styled.main`
    display: grid;
    grid-template-columns: 33% 67%;

    padding: 40px 0;

    border-bottom: 1px solid #ccc;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

export const Photo = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 250px;
        width: 250px;
        border-radius: 50%;
        margin: auto;
    }
`;

export const Info = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 20px;
    text-align: justify;

    p {
        padding: 2px;
    }

    @media (max-width: 850px) {
        margin-top: 20px;
    }
`;
