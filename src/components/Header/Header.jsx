import web3MobileImage from '../assets/images/image-web-3-mobile.jpg';
import styled from 'styled-components';
import mediaQuery from '../mediaquery/mediaquery';

const HeaderContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    padding-bottom: 65px;
}
`;

const ImageContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    object-fit: cover;
    justify-content: center;
    margin-bottom: 22px;
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
`;

const Section = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    margin: auto;
    max-width: 500px;
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
`;

const Button = styled.button`
@media (max-width: ${mediaQuery.medium}) {
    padding: 20px 30px;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 5px;
    border: none;
    text-transform: uppercase;
    margin-left: 15px;
    color: #fff;
    background-color: hsl(5, 85%, 63%);
}
`;

function Header() {

    return (
        <HeaderContainer>
            <ImageContainer className="">
                <img 
                src={web3MobileImage}
                style={
                    {   width: '500px',
                        minWidth: '355px',
                        objectFit: 'contain'
                    }
                }
                alt="main image" 
                />
            </ImageContainer>
            <Section>
            <Title>
            The Bright Future of Web 3.0?
            </Title>
            <Content>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?
            </Content>
            <Button>
            Read more
            </Button>
            </Section>
        </HeaderContainer>
    )
}

export default Header;