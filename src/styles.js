import styled from "styled-components";

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
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