import styled from "styled-components"

export const Header = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  align-items: center;

  background-color: #FFF;
  box-shadow: 0 0 12px 6px rgba(0,0,0,0.1);
`;

export const Logo = styled.h2`
  font-size: 2em;
`;

export const LogoTitle = styled.h1`
  margin: 0 30px;
  font-family: 'Poppins', 'Impact', sans-serif;
`;

export const Input = styled.input`
  all: unset;

  border: 2px solid #d9d9d9;
  border-radius: 15px;

  width: 100px;
  
  padding: 10px;
  margin: 10px 0;

  &::placeholder {
    color: #d9d9d9;
    text-align: center;

    text-transform: uppercase;

    font-family: 'Poppins', 'Impact', sans-serif;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 25px;
`;

export const ContentFilter = styled.div`
  display: flex;
  flex: 1;

  margin-top: 20px;

  justify-content: flex-end;
`;

interface CategorieProps {
  color: string;
}

export const Categorie = styled.div<CategorieProps>`
  display: flex;

  cursor: pointer;

  border-radius: 0 0 1px 1px ;

  height: 32px;
  width: 25px;

  margin: 0 1px;

  background-color: ${({ color }) => color};
`;

