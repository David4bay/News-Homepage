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
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 30px;
    color: hsl(240, 100%, 5%);
  }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 15px;
    list-style: none;
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

.Mobile {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
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
}
`;

function Nav({dark, darkToggle, showMenu, handleHamburger, burgerMenu, autoCloseHamburger}) {

    useEffect(() => {
        if (showMenu === false) {
            autoCloseHamburger();
        }
    }, [showMenu, autoCloseHamburger])

    return (
    <div>
        <NavContainer>
            <LogoContainer className="Logo">
            <img src={Logo} />
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
                            paddingRight: '10px'
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
                            paddingRight: '10px'
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
                    <img src={burgerMenu ? HamburgerClosed : Hamburger} />
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