import styled from 'styled-components';
import mediaQuery from '../mediaquery/mediaquery';

const AsideWrapper = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

const AsideContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    background-color: #00001a;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 30px;
    margin-bottom: 64px;
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
`;

const StrongText = styled.strong`
@media (max-width: ${mediaQuery.medium}) {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    padding-left: 8px;
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
`;

const InnerContent = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
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