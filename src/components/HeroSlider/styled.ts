import styled from "styled-components"

export const Container = styled.div`
  flex: 1;
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  
  background-color: #000;

  margin: 10px 20px;

  border-radius: 15px;

  height: 500px;

  img {
    width: 75%;
    height: 80%;
  }
`;

export const ArrowIcon = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  margin: 0 10px;

  background-color: #FFF;

  border-radius: 50%;
`;