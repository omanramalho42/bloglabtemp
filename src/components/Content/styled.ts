import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 40px;

  h1 {
    text-transform: uppercase;
  };

  img {
    display: flex;

    margin: auto;
    width: 100%;
    height: 100%;
    
    border-radius: 50%;
  };
  `;

export const ImageContainer = styled.div`
  display: flex;
  padding: 10px;

  width: 238px;
  height: 238px;

  @media screen and (max-width: 1200px) {
    width: 180px;
    height: 180px;  
  }

  border-radius: 50%;
  border: 2px solid blue;
`;

interface BadgeProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  size: number;
  colorTag?: string;
}

export const Badge = styled.div<BadgeProps>`
  display: flex;
  position: relative;

  background-color: blue;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: 50%;
`;

export const CardImage = styled.div`
  display: flex;

  margin: auto;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
`;