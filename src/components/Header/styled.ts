import styled from "styled-components"

export const Header = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;

  justify-content: flex-end;

  background-color: #FFF;
  box-shadow: 0 0 12px 6px rgba(0,0,0,0.1);

  height: 120px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 25px;
`;

interface CategorieProps {
  color: string;
}

export const Categorie = styled.div<CategorieProps>`
  display: flex;

  border-radius: 0 0 1px 1px ;

  height: 32px;
  width: 25px;

  margin: 0 1px;

  background-color: ${({ color }) => color};
`;

