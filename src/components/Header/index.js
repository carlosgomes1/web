import React, { useState, useEffect } from 'react';

import logo from '../../assets/image/logo.png';

import {
    Container,
    NavLogo,
    NavLink,
    DropDown,
    NavLinkDropdown,
    Hamburguer,
} from './styles';

export default function Header(props) {
    const [open, setOpen] = useState(false);
    const [width850, setWidth850] = useState(false);

    useEffect(() => {
        getWidth();
    }, []);

    function handleClick() {
        setOpen(!open);
    }

    function getWidth() {
        const width = window.screen.width;

        if (width < 850) {
            setWidth850(true);
        }
    }

    return (
        <div
            style={{
                height: '15vh',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                background: props.scroll ? '#222' : 'transparent',
                zIndex: props.scroll ? 2 : 1,
                transition: 'background 0.6s',
                height: open ? 300 : 100,
                padding: open ? '0' : '0 30px',
                transition: '0.3s',
            }}
        >
            <Container>
                <NavLogo to="/">
                    <img src={logo} alt="Logo" />
                </NavLogo>

                {width850 ? (
                    <>
                        <Hamburguer
                            isOpen={open}
                            menuClicked={handleClick}
                            width={60}
                            height={26}
                            strokeWidth={3}
                            rotate={0}
                            color="white"
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                        <DropDown style={{ display: open ? null : 'none' }}>
                            <NavLinkDropdown onClick={handleClick} href="#home">
                                Home
                            </NavLinkDropdown>
                            <NavLinkDropdown
                                onClick={handleClick}
                                href="#about"
                            >
                                Sobre
                            </NavLinkDropdown>
                            <NavLinkDropdown
                                onClick={handleClick}
                                href="#projects"
                            >
                                Projetos
                            </NavLinkDropdown>
                            <NavLinkDropdown onClick={handleClick} href="">
                                Trabalhos
                            </NavLinkDropdown>
                            <NavLinkDropdown
                                onClick={handleClick}
                                href="#contact"
                            >
                                Contato
                            </NavLinkDropdown>
                        </DropDown>
                    </>
                ) : (
                    <ul>
                        <NavLink href="#home"> Home </NavLink>
                        <NavLink href="#about"> Sobre </NavLink>
                        <NavLink href="#projects"> Projetos </NavLink>
                        <NavLink href=""> Trabalhos </NavLink>
                        <NavLink href="#contact"> Contato </NavLink>
                    </ul>
                )}
            </Container>
        </div>
    );
}
