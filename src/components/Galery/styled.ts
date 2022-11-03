import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;

  margin-top: 40px;
  background-color: red;

  padding: 10px;
`;

export const Card = styled.div`
  display: flex;

  height: 200px;

  border-radius: 15px;

  background-color: #FFF;
`;