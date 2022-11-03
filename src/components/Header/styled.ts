import styled from "styled-components"

export const Header = styled.header`
  flex: 1;

  justify-content: space-between;  
  align-items: center;
  
  background-color: #FFF;
  box-shadow: 0 0 12px 6px rgba(0,0,0,0.1);
`;

export const Logo = styled.h1`
  font-size: 2em;
`;

export const LogoTitle = styled.div`
  h2 {
    font-family: 'Poppins', 'Impact', sans-serif;
  }

  position: absolute;
  margin-left: 30px;
  top: 20px;
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

