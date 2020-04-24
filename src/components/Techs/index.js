import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';

import { Container, Title, Description } from './styles';

export default function Techs() {
    return (
        <Container>
            <ul>
                <li>
                    <FaReact color="#2AC7E3" size={80} />
                    <Title> ReactJS </Title>
                    <Description>
                        O React é uma biblioteca JavaScript de código aberto com
                        foco em criar interfaces de usuário em páginas web. É
                        mantido pelo Facebook, Instagram, outras empresas e uma
                        comunidade de desenvolvedores individuais. É utilizado
                        nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek,
                        HelloSign, Walmart e outros.
                    </Description>
                </li>
                <li>
                    <FaNodeJs color="#84BD48" size={80} />
                    <Title> NodeJS </Title>
                    <Description>
                        Node.js é um interpretador de JavaScript assíncrono com
                        código aberto orientado a eventos, criado por Ryan Dahl
                        em 2009, focado em migrar a programação do Javascript do
                        cliente (frontend) para os servidores, criando
                        aplicações de alta escalabilidade (como um servidor
                        web), manipulando milhares de conexões/eventos
                        simultâneas em tempo real numa única máquina física.
                    </Description>
                </li>
                <li>
                    <FaReact
                        color="#2AC7E3"
                        size={80}
                        style={{ background: '#222222' }}
                    />
                    <Title> React Native </Title>
                    <Description>
                        React Native é uma biblioteca Javascript criada pelo
                        Facebook. É usada para desenvolver aplicativos para os
                        sistemas Android e IOS de forma nativa.
                    </Description>
                </li>
                <li>
                    <FaJs color="#F7DF19" size={80} />
                    <Title> Javascript </Title>
                    <Description>
                        JavaScript é uma linguagem de programação interpretada
                        estruturada, de script em alto nível com tipagem
                        dinâmica fraca e multiparadigma. Juntamente com HTML e
                        CSS, o JavaScript é uma das três principais tecnologias
                        da World Wide Web.
                    </Description>
                </li>
                <li>
                    <FaGitAlt color="#F1502F" size={80} />
                    <Title> Git </Title>
                    <Description>
                        Git é um sistema de controle de versões distribuído,
                        usado principalmente no desenvolvimento de software, mas
                        pode ser usado para registrar o histórico de edições de
                        qualquer tipo de arquivo.
                    </Description>
                </li>
            </ul>
        </Container>
    );
}
