import styled from "styled-components";

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    text-align: center;
    width: 100%;
    padding: 2rem 2rem;

  }
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 0rem;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export { About, Description, Image, Hide };