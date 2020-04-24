import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    html{
        scroll-behavior: smooth;
    }
`;
