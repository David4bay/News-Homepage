/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect, useCallback } from 'react';
import Article from '../Article/Article';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';

function Main() {

    const reducer = (state, action) => {
        switch(action.type) {
            case 'Dark':
                return {...state, dark: !state.dark}
            case 'OpenMenuToggle':
                return {...state, menu: action.payload}
            case 'CloseMenuToggle':
                return {...state, menu: action.payload}
            case 'ToggleSideNav':
                return {...state, burgerMenu: !state.burgerMenu}
        }
    }
    
    const initialState = {
        dark: false,
        menu: false,
        burgerMenu: false
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const useMediaQuery = (width) => {

    const updateTarget = useCallback((e) => {
        if (e.matches) {
          dispatch({type: 'OpenMenuToggle', payload: true});
        } else {
          dispatch({type: 'CloseMenuToggle', payload: false})
        }
      }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);

        media.addEventListener("change", updateTarget);
    
        if (media.matches) {
            dispatch({type: 'OpenMenuToggle', payload: true});
        }
    
        return () => media.removeEventListener("change", updateTarget);

      }, []);

      return state.menu;
    };

    const showMenu = useMediaQuery(768);
    
    const darkToggle = e => {
        e.preventDefault();
        return dispatch({type: 'Dark'})
    }

    const handleHamburger = e => {
        e.preventDefault();
        return dispatch({type: 'ToggleSideNav'})
    }
    
    return (
        <React.Fragment>
            <Nav 
            dark={state.dark}
            hamburgerState={state.burgerMenu} 
            darkToggle={darkToggle}
            showMenu={showMenu}
            burgerMenu={state.burgerMenu}
            handleHamburger={handleHamburger}
            />
            <Header />
            <Aside />
            <Article />
            <Footer />
        </React.Fragment>
    )
}
export default Main;