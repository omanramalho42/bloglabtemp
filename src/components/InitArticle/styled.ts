import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin: 0 20px;

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 40px;
  padding: 10px;
`;

interface TagCategorieProps {
  color?: string;
}

export const TagCategorie = styled.h2<TagCategorieProps>`
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 500;

  color: ${({ color }) => color };
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2em;

  margin: 5px 0;
`;

export const SubTitle = styled.h3`
  margin: 5px 0;
`;

export const Paragraph = styled.p`
  margin: 5px 0;
  /* text-indent: 20px; */
  line-height: 25px;
`;

export const LeadMore = styled.a`
  text-decoration: underline;
  text-transform: uppercase;

  margin: 5px 0;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  `;


export const ImageArticle = styled.div`
  display: flex;
  
  height: 550px;
  
  justify-content: center;
  align-items: center;

  `;

export const Image = styled.img`
  display: flex;
  width: 90%;
  height: 90%;

  border-radius: 5px;
  `;
