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
`;

const ArticleContainer = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

const ContentContainer = styled.figure`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: row;
    height: 165px;
    margin-left: 15px;
    margin-right: 15px;
}
`;

const Image = styled.img`
@media (max-width: ${mediaQuery.medium}) {
    margin-right: 22px;
    height: 165px;
    width: 102px;
}
`;

const SectionContent = styled.div`
@media (max-width: ${mediaQuery.medium}) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-right: 15px;
}
`;

const ImageHeading = styled.h3`
@media (max-width: ${mediaQuery.medium}) {
    font-size: 42px;
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
}

&:active {
    color: #da635d;
}
`;

const ImageParagraph = styled.p`
@media (max-width: ${mediaQuery.medium}) {
    padding-right: 30px;
    line-height: 1.6;
    color: #9e9ba4;
}
`;

function Article() {
    return (
            <ArticleWrapper>
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
                        <ImageSubHeading>
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
                        <ImageSubHeading>
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
                        alt="" 
                        />
                        <SectionContent>
                        <ImageHeading>
                        03
                        </ImageHeading>
                        <ImageSubHeading>
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