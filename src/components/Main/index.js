import React, { useEffect, useState } from 'react';
import { FiCode } from 'react-icons/fi';

import { Container, Icon, Info, Title, Techs } from './styles';

import Header from '../../components/Header';

export default function Main() {
    const [transform, setTransform] = useState(false);
    const [width850, setWidth850] = useState(false);

    function getWidth() {
        const width = window.screen.width;

        if (width < 850) {
            setWidth850(true);
        }
    }

    useEffect(() => {
        getWidth();
        window.onscroll = () => handleScroll();
    }, []);

    function handleScroll() {
        let scrollTop = document.documentElement.scrollTop;

        if (scrollTop >= 150) {
            setTransform(true);
        } else {
            setTransform(false);
        }
    }

    return (
        <Container id="home">
            <Header scroll={transform} />
            <div>
                <Icon style={{ display: width850 ? 'none' : null }}>
                    <FiCode size={300} color="#c20008" />
                </Icon>
                <div>
                    <Info>
                        <Title> Carlos Gomes da Silva </Title>
                        <small> Programador fullstack </small>
                        <Techs speed={100} hideCursor={true}>
                            ReactJS, React Native, NodeJS
                        </Techs>
                    </Info>
                </div>
            </div>
        </Container>
    );
}
