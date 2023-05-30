import styled from 'styled-components';

const FooterStyle = styled.div`
width: 100%;
text-align: center;
font-size: 17px;
font-weight: 900;
background-color: #000;
padding: 10px;
color: #fff;
`;

const LinkStyle = styled.a`
text-decoration: none;
color: hotpink;

&:hover {
    color: red;
}
`;

function Footer() {
    return (
        <FooterStyle>
            <p>
                Coded by <LinkStyle href="https://github.com/David4bay" >David Bayode</LinkStyle>
            </p>
        </FooterStyle>
    )
}

export default Footer;