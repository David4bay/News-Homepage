/* eslint-disable react/prop-types */
import web3MobileImage from '../assets/images/image-web-3-mobile.jpg';
import web3DesktopImage from '../assets/images/image-web-3-desktop.jpg';
import styled from 'styled-components';
import mediaQuery from '../mediaquery/mediaquery';

const HeaderContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    padding-bottom: 65px;
}

@media (min-width: ${mediaQuery.medium}) {
    display: grid;
    margin-left: 15px;
    margin-right: 15px;
    grid-column: 1/4;
    grid-row: 1/2;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
`;

const ImageContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: center;
    margin-bottom: 22px;
}

@media (min-width: ${mediaQuery.medium}) {
    & {
    display: grid;
    grid-column: 1/3;
    grid-row: 1/2;
    height: 100%;
    }
}

@media (min-width: ${mediaQuery.medium}) {
    & > .Header__Image {
        width: 100%;
        display: grid;
        grid-column: 1/3;
        grid-row: 1/2;
    }

@media (max-width: ${mediaQuery.medium}) {
    & > .Header__Image {
        width: 500px;
        min-width: 355px;
        object-fit: contain;
    }
}
}
`;

const Title = styled.h1`
@media (max-width: ${mediaQuery.medium}) {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 500px;
    color: hsl(240, 100%, 5%);
    font-weight: 800;
    font-size: 48px;
}

@media (min-width: ${mediaQuery.medium}) {
    & {
        display: grid;
        grid-column: 1/2;
        grid-row: 1/3;
        color: hsl(240, 100%, 5%);
        font-weight: 800;
        font-size: 52px;
    }
}
`;

const Section = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    margin: auto;
    max-width: 500px;
}

@media (min-width: ${mediaQuery.medium}) {
    & {
        display: grid;
        grid-column: 1/3;
        grid-row: 2/3;
        padding-top: 20px;
        gap: 12px;
    }
}
`;

const Content = styled.p`
@media (max-width: ${mediaQuery.medium}) {
    padding-top: 25px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 500;
    color: hsl(236, 13%, 42%);
    line-height: 1.7;
    word-spacing: 1px;
    padding-bottom: 30px;
}

@media (min-width: ${mediaQuery.medium}) {
    & {
        display: grid;
        grid-column: 2/3;
        grid-row: 1/2;
        font-size: 18px;
        font-weight: 500;
        color: hsl(236, 13%, 42%);
        line-height: 1.7;
        word-spacing: 1px;
    }
}
`;

const Button = styled.button`
@media (max-width: ${mediaQuery.medium}) {
    padding: 20px 30px;
    font-size: 17px;
    font-weight: 700;
    border: 1px solid transparent;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-left: 15px;
    color: #fff;
    background-color: hsl(5, 85%, 63%);

    &:active {
        background-color: #00001a;
        border: 1px solid #fff;
    }

}
@media (min-width: 769px) {
    & {
        display: grid;
        grid-column: 2/3;
        justify-self: start;
        align-self: start;
        grid-row: 2/3;
        width: 188px;
        padding: 20px 0px;
        color: #fff;
        background-color: hsl(5, 85%, 63%);
        font-size: 17px;
        font-weight: 700;
        border: 1px solid transparent;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
}
`;

function Header({dark, menu}) {

    return (
        <HeaderContainer>
            <ImageContainer>
                <img
                className="Header__Image" 
                src={`${menu ? web3MobileImage : web3DesktopImage}`}
                alt="main image" 
                />
            </ImageContainer>
            <Section>
            <Title style={{color: `${dark ? '#fff' : 'hsl(240, 100%, 5%)'}`}}>
            The Bright Future of Web 3.0?
            </Title>
            <Content>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?
            </Content>
            <Button className="Button">
            Read more
            </Button>
            </Section>
        </HeaderContainer>
    )
}

export default Header;