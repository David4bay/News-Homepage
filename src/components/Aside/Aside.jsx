import styled from 'styled-components';
import mediaQuery from '../mediaquery/mediaquery';

const AsideWrapper = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 769px) {
    display: grid;
    grid-column: 3/4;
    grid-row: 1/2;
    padding-right: 20px;
    margin-left: 15px;
    height: 730px;
}
`;

const AsideContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    max-width: 500px;
    background-color: #00001a;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 30px;
    margin-bottom: 64px;
}

@media (min-width: 769px) {
    color: #fff;
    background-color: #00001a;

}
`;

const AsideTitle = styled.h2`
@media (max-width: ${mediaQuery.medium}) {
    font-size: 30px;
    padding-left: 22px;
    padding-right: 15px;
    max-width: 500px;
    padding-top: 28px;
    padding-bottom: 40px;
    color: #e7ab62;
    font-weight: 800;
}

@media (min-width: 769px) {
    font-size: 45px;
    padding-left: 22px;
    max-width: 500px;
    padding-top: 28px;
    padding-bottom: 0px;
    color: #e7ab62;
    font-weight: 800;
    transition: all 0.4s ease;

    &:hover {
        color: gold;
    }
}
`;

const StrongText = styled.strong`
@media (max-width: ${mediaQuery.medium}) {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    padding-left: 8px;
}

@media (min-width: 769px) {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    color: #fff;
    flex-grow: 0;
    font-size: 28px;
    font-weight: 700;
    margin-left: 8px;
    transition: color 0.4s ease;

    &:hover {
        cursor: pointer;
        color: #e7ab62;
    }
}
`;

const SubText = styled.p`
@media (max-width: ${mediaQuery.medium}) {
    color: #c4c5d9;
    font-size: 15px;
    font-weight: 300;
    padding-left: 8px;
    padding-bottom: 35px;
    padding-top: 22px;
    margin-right: 15px;
    line-height: 1.7;
    border-bottom: 1px solid #c4c5d9;
}

@media (min-width: 769px) {
    display: block;
    color: #c4c5d9;
    font-size: 22px;
    font-weight: 300;
    padding-left: 8px;
    padding-bottom: 35px;
    padding-top: 22px;
    margin-right: 50px;
    line-height: 1.9;
    word-spacing: 2px;
    border-bottom: 1px solid #c4c5d9;
    
}
`;

const InnerContent = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
}

@media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 50px;
}
`;

const SubContent = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    padding-left: 15px;

    &:first-child > ${SubText} {
        padding-right: 15px;
    }
    
    &:nth-child(2), &:nth-child(3) {
        padding-top: 35px;
    }
    
    &:last-child > ${SubText} {
        border: none;
    }
}

@media (min-width: 769px) {
    padding-left: 15px;
    flex-grow: 0;

    &:first-child > ${SubText} {
        padding-right: 15px;
    }
    
    &:nth-child(2), &:nth-child(3) {
        padding-top: 35px;
    }
    
    &:last-child > ${SubText} {
        border: none;
    }
}
`;

function Aside() {
    return (
        <AsideWrapper>
            <AsideContainer>
            <AsideTitle>
            New
            </AsideTitle>
            <InnerContent>
                <SubContent>
                    <StrongText>
                    Hydrogen VS Electric Cars
                    </StrongText>
                    <SubText>
                    Will hydrogen-fueled cars ever catch up to EVs?
                    </SubText>
                </SubContent>
                <SubContent>
                    <StrongText>
                    The Downsides of AI Artistry
                    </StrongText>
                    <SubText>
                    What are the possible adverse effects of on-demand AI image generation?
                    </SubText>
                </SubContent>
                <SubContent>
                    <StrongText>
                    Is VC Funding Drying Up?
                    </StrongText>
                    <SubText>
                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                    </SubText>
                </SubContent>
            </InnerContent>
        </AsideContainer>
        </AsideWrapper>
    )
}

export default Aside;