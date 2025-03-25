// src/styles/styles.js
import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    text-align: center;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border-radius: 1rem;
  }
  @media (max-width: 1300px) {
    img {
      height: 50vh;
      margin-top: 2rem;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 40vh;
    }
  }
  @media (max-width: 480px) {
    img {
      height: 30vh;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
