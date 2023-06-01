/* eslint-disable react/prop-types */
import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";
import styled from "styled-components";


const GridContainer = styled.div`
@media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
`;

function Body({dark, menu}) {
    return (
        <GridContainer className="Grid">
        <Header className="Header" 
        dark={dark}
        menu={menu}
        />
        <Aside />
        <Article />
        </GridContainer>
    )
}

export default Body;