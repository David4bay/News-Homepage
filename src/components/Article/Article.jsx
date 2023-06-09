/* eslint-disable react/prop-types */
import RetroImage from '../assets/images/image-retro-pcs.jpg';
import ImageTop from '../assets/images/image-top-laptops.jpg';
import GamingPad from '../assets/images/image-gaming-growth.jpg';
import styled from 'styled-components';
import mediaQuery from '../mediaquery/mediaquery';

const ArticleWrapper = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding-bottom: 80px;
}

@media (min-width: 769px) {
    display: grid;
    grid-column: 1/4;
    grid-template-columns: repeat(auto-fit, minmax(500px, max-content));
    justify-content: space-between;
    grid-template-rows: auto;
    column-gap: 10px;    
    padding-left: 15px;
    padding-right: 15px;
}
`;

const ArticleContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (min-width: 769px) {
    display: grid;
    margin-top: 25%;
    grid-row: 1/4;
    justify-content: space-between;
    overflow: hidden;
    height: max-content;
}
`;

const ContentContainer = styled.figure`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
    max-width: 500px;
    margin-left: 15px;
    margin-right: 15px;
}

@media (min-width: 769px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 25px;
    width: 500px;
    transition: all 0.4s ease;

    &:hover {
        box-shadow: -2px 2px 1px 0px hsla(100, 0%, 100%, 0.15);
        transform: translateY(-5px);
    }
}
`;

const Image = styled.img`
@media (max-width: ${mediaQuery.medium}) {
    margin-right: 22px;
    width: 102px;
    object-fit: cover;
}

@media (min-width: 769px) {
    display: inline;
    width: 180px;
}
`;

const SectionContent = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    gap: 17px;
}

@media (min-width: 769px) {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr
}
`;

const ImageHeading = styled.h3`
@media (max-width: ${mediaQuery.medium}) {
    font-size: 42px;
    font-weight: 700;
    color: #c7c6cc;
}

@media (min-width: 769px) {
    font-size: 68px;
    font-weight: 700;
    color: #c7c6cc;
}
`;

const ImageSubHeading = styled.strong`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    color: #00000e;
    height: 18px;

    &:hover {
        color: hsl(5, 85%, 63%);
    }
}

@media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 23px;
    font-weight: 900;
    color: #00000e;

    &:hover {
        cursor: pointer;
        color: hsl(5, 85%, 63%);
    }
}

`;

const ImageParagraph = styled.p`
@media (max-width: ${mediaQuery.medium}) {
    padding-right: 30px;
    line-height: 1.6;
    color: #9e9ba4;
}

@media (min-width: 769px) {
    display: flex;
    padding-right: 50px;
    font-size: 17px;
    line-height: 1.8;
    align-items: center;
}
`;

function Article({dark}) {
    return (
            <ArticleWrapper role="contentinfo">
                <ArticleContainer>
                    <ContentContainer>
                        <Image 
                        src={RetroImage} 
                        alt="Retro Image" 
                        />
                        <SectionContent>
                        <ImageHeading>
                        01
                        </ImageHeading>
                        <ImageSubHeading
                        style={
                            {
                                color: `${dark ? '#da635d' : '#09061b'}`
                            }
                        }
                        alt="Keyboard Image"
                        >
                        Reviving Retro PCs
                        </ImageSubHeading>
                        <ImageParagraph>
                        What happens when old PCs are given modern upgrades?    
                        </ImageParagraph>
                        </SectionContent>
                    </ContentContainer>
                </ArticleContainer>
                <ArticleContainer>
                    <ContentContainer>
                        <Image 
                        src={ImageTop} 
                        alt="Image Laptop" 
                        />
                        <SectionContent>
                        <ImageHeading>
                        02
                        </ImageHeading>
                        <ImageSubHeading
                        style={
                            {
                                color: `${dark ? '#da635d' : '#09061b'}`
                            }
                        }
                        >
                        Top 10 Laptops of 2022
                        </ImageSubHeading>
                        <ImageParagraph>
                        Our best picks for various needs and budgets.
                        </ImageParagraph>
                        </SectionContent>
                    </ContentContainer>
                </ArticleContainer>
                <ArticleContainer>
                    <ContentContainer>
                        <Image 
                        src={GamingPad} 
                        alt="Gamepad" 
                        />
                        <SectionContent>
                        <ImageHeading>
                        03
                        </ImageHeading>
                        <ImageSubHeading
                        style={
                            {
                                color: `${dark ? '#da635d' : '#09061b'}`
                            }
                        }
                        >
                        The Growth of Gaming
                        </ImageSubHeading>
                        <ImageParagraph>
                        How the pandemic has sparked fresh opportunities.
                        </ImageParagraph>
                        </SectionContent>
                    </ContentContainer>
                </ArticleContainer>
            </ArticleWrapper>
    )
}

export default Article;