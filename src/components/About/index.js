import React from 'react';

import { Container, Photo, Info } from './styles';

import me from '../../assets/image/me.jpeg';

export default function About() {
    return (
        <Container id="about">
            <Photo>
                <img src={me} />
            </Photo>
            <div>
                <Info>
                    <div>
                        <p>
                            <strong>E aí, tudo bem?</strong>
                        </p>
                        <p>
                            Meu nome é <strong>Carlos</strong>, sou
                            desenvolvedor fullstack com as tecnologias{' '}
                            <strong>ReactJS</strong>,{' '}
                            <strong>React Native</strong> e{' '}
                            <strong>NodeJS</strong>.
                        </p>
                        <p>
                            Moro em <strong>São Paulo/SP</strong> e tenho{' '}
                            <strong>20 anos</strong>.{' '}
                        </p>
                        <p>
                            Amo a tecnologia e as infinitas possibilidades que
                            elas nos fornece. Quando estou focado, costumo
                            estudar muito, e no meu tempo livre... estudo
                            também! Programar é tudo! Descobri a stack
                            React/Node apenas esse ano, e estou cada dia me
                            capacitando mais e mais.
                        </p>
                    </div>
                </Info>
            </div>
        </Container>
    );
}
