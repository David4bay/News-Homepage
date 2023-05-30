import RetroImage from '../assets/images/image-retro-pcs.jpg';
import ImageTop from '../assets/images/image-top-laptops.jpg';
import GamingPad from '../assets/images/image-gaming-growth.jpg';
import styled from 'styled-components';

const ArticleContainer = styled.div`
display: flex;
flex-direction: row;
gap: 100px;
`;

const ContentContainer = styled.figure`
display: flex;
flex-direction: row;
margin-left: 15px;
margin-right: 15px;
`;

const Image = styled.img`
width: 103px;
height: 140px;
margin-right: 22px;
`;

const SectionContent = styled.div`
display: flex;
flex-direction: column;
padding-right: 15px;
`;

const ImageHeading = styled.h3`
font-size: 42px;
font-weight: 700;
color: #c7c6cc;
`;

const ImageSubHeading = styled.strong`
font-size: 20px;
font-weight: 900;
color: #00000e;
padding-bottom: 18px;
`;

const ImageParagraph = styled.p`
padding-right: 30px;
line-height: 1.6;
`;

function Article() {
    return (
            <div>
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
            </div>
    )
}

export default Article;