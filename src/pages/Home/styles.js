import styled, { keyframes } from 'styled-components';
import Typing from 'react-typing-animation';

import background from '../../assets/image/background.jpg';

export const Container = styled.main`
    background: url(${background});
    height: 100%;

    div {
        width: 100%;
        height: 80vh;
        display: flex;

        div {
        }
    }
`;

export const Icon = styled.div`
    svg {
        margin: auto;
    }
`;

export const Info = styled.span`
    display: flex;
    flex-direction: column;
    margin: 20% 0;

    small {
        font-size: 26px;
        color: #c20008;
    }
`;

export const Title = styled.strong`
    color: #fff;
    font-size: 40px;
`;

const animationTypeWritter = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Techs = styled(Typing)`
    color: #fff;
    padding-top: 26px;
    font-size: 30px;
    font-style: italic;

    &:after {
        content: '|';
        margin-left: 5px;
        animation: ${animationTypeWritter} 1s infinite;
    }
`;
