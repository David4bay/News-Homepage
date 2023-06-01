/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import Hamburger from '../assets/images/icon-menu.svg';
import HamburgerClosed from '../assets/images/icon-menu-close.svg';
import { IoCloudyNightOutline, IoCloudyNightSharp } from 'react-icons/io5';
import styled from 'styled-components';
import mediaQuery from '../mediaquery/mediaquery';

const NavContainer = styled.ul`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    height: 70px;
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 30px;
    margin-bottom: 30px;
    color: hsl(240, 100%, 5%);
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 15px;
    list-style: none;
  }
`;

const LogoContainer = styled.li`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
}
`;

const DeskTopNav = styled.ul`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
}
@media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
    list-style: none
}
`;

const MenuItems = styled.ul`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    gap: 30px;
}

@media (max-width: ${mediaQuery.medium}) {

&.Mobile {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   place-content: center;
   border: transparent;
   padding-left: 50px;
   font-size: 22px;
   margin-top: -30px;
   position: absolute; 
   right: 0;
   width: 60%;
   min-height: 100vh;
   color: hsl(240, 100%, 5%);
   background-color: #fff;
   z-index: 2;
}

&.Mobile > li:hover {
    color: orangered;
}
}

@media (min-width: 769px) {
&.Nav__Items {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 40px;
}

&.Nav__Items > li:active {
    color: orangered;
}
}
`;

const DarkCloudFavicon = styled.i`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    position: relative;
}

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    position: relative;
`;

const CallToActionLogo = styled.i`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    object-fit: contain;
    z-index: 99999;
}
`;

function Nav({dark, darkToggle, showMenu, handleHamburger, burgerMenu, autoCloseHamburger}) {

    useEffect(() => {
        if (showMenu === false) {
            autoCloseHamburger();
        }
    }, [autoCloseHamburger, showMenu]);

    useEffect(() => {
        if (burgerMenu) {
            document.body.style.backgroundColor = `rgba(0, 0, 0, 0.38)`;
            document.body.style.position = `fixed`;
        } else {
            document.body.style.backgroundColor = `transparent`;
            document.body.style.position = `static`;
        }
    }, [burgerMenu]);

    useEffect(() => {
        if (dark) {
            document.documentElement.style.colorScheme = `dark light`;
         } else {
            document.documentElement.style.colorScheme = `normal`;
        }
    }, [dark])

    return (
    <div>
        <NavContainer>
            <LogoContainer className="Logo">
            <img
            src={Logo} 
            style={
                { filter: `${dark ? 'brightness(0) invert(1)' : 'invert(0)'}`,
            }}
            />
            </LogoContainer>
            <DeskTopNav className="Right__Nav">
            <li onClick={darkToggle} className="Night__Mode">
                {
                dark ? 
                <DarkCloudFavicon>
                    <IoCloudyNightSharp 
                    size={50} 
                    style={
                        {
                            width: '100%',
                            height: '100%',
                            paddingRight: '10px',
                            color: 'gold',
                            
                        }
                    }
                    />
                </DarkCloudFavicon> 
                :
                <DarkCloudFavicon>
                    <IoCloudyNightOutline
                    size={20}
                    style={
                        {   
                            width: '100%',
                            height: '100%',
                            paddingRight: '10px',
                        }
                    }
                    />
                </DarkCloudFavicon> 
                }
            </li>
            {
            showMenu &&
                (
                    <CallToActionLogo onClick={handleHamburger}>
                    <img
                    style={{filter: `${dark && burgerMenu === false ? 'brightness(0) invert(1)' : 'invert(0)'}`,
                    
                    }} 
                    src={burgerMenu ? HamburgerClosed : Hamburger} 
                    />
                </CallToActionLogo>
                )
}
                {
                burgerMenu === true || showMenu === false 
                ?
                (
                <MenuItems className={burgerMenu ? "Mobile" : "Nav__Items"}>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </MenuItems>
                    )
                    :
                    ''
                }
            </DeskTopNav>
        </NavContainer>
    </div>
    )
}

export default Nav;