import React from 'react';
import {
    FaHome,
    FaAddressCard,
    FaBook,
    FaBriefcase,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';

import {
    Container,
    Menu,
    Contato,
    RedesSociais,
    Title,
    MenuLink,
    ContatoInfo,
    SocialLink,
    PoweredBy,
    TitleBy,
} from './styles';

export default function Footer() {
    return (
        <Container id="contact">
            <div>
                <Menu>
                    <Title> Menu </Title>
                    <MenuLink href="#home">
                        <FaHome /> <span> Home </span>
                    </MenuLink>
                    <MenuLink href="#about">
                        <FaAddressCard /> <span> Sobre </span>
                    </MenuLink>
                    <MenuLink href="#projects">
                        <FaBook /> <span> Projetos </span>
                    </MenuLink>
                    <MenuLink href="">
                        <FaBriefcase /> <span> Trabalhos </span>
                    </MenuLink>
                </Menu>
                <Contato>
                    <Title> Contato </Title>
                    <ContatoInfo>
                        <FaWhatsapp color="#50C960" />
                        <span> (11) 95913 - 0360 </span>
                    </ContatoInfo>
                    <ContatoInfo>
                        <FaEnvelope color="#006EC3" />
                        <span> carlosgs.dev@gmail.com </span>
                    </ContatoInfo>
                    <ContatoInfo>
                        <FaMapMarkerAlt color="#D05052" />
                        <span>
                            Rua João Gomes Pereira, 697, Jd Tietê, São Paulo/SP
                        </span>
                    </ContatoInfo>
                </Contato>
                <RedesSociais>
                    <Title> Redes Sociais </Title>
                    <SocialLink
                        target="_blank"
                        href="https://www.facebook.com/carlin.gomes.5"
                    >
                        <FaFacebook size={36} color="#1674EB" />
                        <span> /carlin.gomes.5 </span>
                    </SocialLink>
                    <SocialLink
                        target="_blank"
                        href="https://www.instagram.com/carlinhosg_/?hl=pt-br"
                    >
                        <FaInstagram size={36} color="#8A44BE" />
                        <span> /carlinhosg_ </span>
                    </SocialLink>
                    <SocialLink
                        target="_blank"
                        href="https://www.linkedin.com/in/carlos-gomes-b278011a6/"
                    >
                        <FaLinkedin size={36} color="#0275B4" />
                        <span> /carlos-gomes-b278011a6 </span>
                    </SocialLink>
                    <SocialLink
                        target="_blank"
                        href="https://github.com/carlosgomes1"
                    >
                        <FaGithub size={36} />
                        <span> /carlosgomes1 </span>
                    </SocialLink>
                </RedesSociais>
            </div>

            <PoweredBy>
                <TitleBy>
                    {' '}
                    Desenvolvido por: Carlos Gomes - Programador Fullstack -
                    2020{' '}
                </TitleBy>
            </PoweredBy>
        </Container>
    );
}
