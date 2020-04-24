import React from 'react';

import { Container, Title, Info } from './styles';

import beTheHero from '../../assets/image/projects/be-the-hero.png';
import radarDev from '../../assets/image/projects/radar-dev.jpeg';

export default function Projects() {
    const projects = [
        {
            image: beTheHero,
            title: 'Be The Hero',
            description:
                'Projeto feio na Semana Omnistack 11 da Rocketseat. Trata-se de um conjunto backend, frontend e mobile que proporciona a divulgação de causas em ONGs e a possibilidade do usuário ser o herói dessa causa.',
            techs: ['ReactJS', 'NodeJS', 'React Native'],
            links: [
                {
                    title: 'Backend Be The Hero',
                    link: 'https://github.com/carlosgomes1/be-the-hero-backend',
                },
                {
                    title: 'Frontend Be The Hero',
                    link:
                        'https://github.com/carlosgomes1/be-the-hero-frontend',
                },
                {
                    title: 'Mobile Be The Hero',
                    link: 'https://github.com/carlosgomes1/be-the-hero-mobile',
                },
            ],
        },
        {
            image: radarDev,
            title: 'Radar Dev',
            description:
                'Projeto feio na Semana Omnistack 10 da Rocketseat. É um app web e mobile com backend para rastrear devs com habilidades específicas num raio de 10km.',
            techs: ['ReactJS', 'NodeJS', 'React Native'],
            links: [
                {
                    title: 'Aplicação no Github',
                    link: 'https://github.com/carlosgomes1/radar-dev',
                },
            ],
        },
    ];

    return (
        <Container id="projects">
            <Title> Projetos </Title>
            <ul>
                {projects.map((item) => (
                    <li key={item.title}>
                        <img src={item.image} />
                        <Info>
                            <strong> {item.title} </strong>
                            <p>
                                {item.description} Tecnologias utilizadas:{' '}
                                {item.techs.map((tech) => (
                                    <span key={tech}>{tech}; </span>
                                ))}
                            </p>
                            <strong> Links </strong>
                            {item.links.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.link}
                                    target="_blank"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </Info>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
