import styled from 'styled-components';

export const Container = styled.footer`
    padding: 30px 0;
    background: #222;

    color: #fff;

    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }

    @media (max-width: 850px) {
        div {
            flex-direction: column;
            justify-content: center;
            align-items: baseline;

            padding: 0 20px;
        }
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 850px) {
        margin-bottom: 25px;
    }
`;

export const Contato = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 850px) {
        margin-bottom: 25px;
    }
`;

export const RedesSociais = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PoweredBy = styled.div`
    margin-top: 20px;
`;

export const Title = styled.strong`
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
    font-style: italic;
`;

export const MenuLink = styled.a`
    text-decoration: none;
    color: #fff;

    display: flex;
    align-items: center;

    padding: 8px 8px 8px 0;

    transition: color 0.3s;

    svg {
        margin-right: 6px;
    }

    &:hover {
        color: #c20008;
    }
`;

export const ContatoInfo = styled.span`
    display: flex;
    align-items: center;

    padding: 8px 8px 8px 0;

    svg {
        margin-right: 6px;
    }
`;

export const SocialLink = styled.a`
    padding: 8px 8px 8px 0;

    text-decoration: none;

    display: flex;
    align-items: center;

    color: #fff;
    transition: color 0.3s;

    svg {
        margin-right: 12px;
    }

    &:hover {
        color: #c20008;
    }
`;

export const TitleBy = styled.strong`
    padding: 8px;
    border-top: 1px solid #ccc;
`;
