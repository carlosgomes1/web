import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

export const Container = styled.header`
    color: #fff;
    width: 100%;

    display: flex;
    justify-content: space-between;

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;

        width: 50%;
    }
`;

export const NavLogo = styled(Link)`
    img {
        height: 100px;
    }

    @media (max-width: 850px) {
        img {
            width: 60%;
        }
    }
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: white;
    font-size: 18px;

    transition: color 0.3s;

    cursor: pointer;

    &:hover {
        color: #c20008;
    }
`;

export const Hamburguer = styled(HamburgerMenu)`
    margin: 30px 10px 10px 10px;
`;

export const DropDown = styled.div`
    position: absolute;
    top: 100px;
    z-index: 5;

    height: 400px;

    background: #222;

    display: flex;
    flex-direction: column;
`;

export const NavLinkDropdown = styled.a`
    height: 40px;

    padding: 10px;

    color: #fff;
    text-decoration: none;
    font-style: italic;

    transition: 0.3s;

    &:hover,
    &:focus,
    &:active {
        color: #c20008;
    }
`;
