import React from "react";
// styles
import styled from "styled-components";
import { About, Description } from "../styles";
// import images
import homeIntro2 from "../img/home-intro2.jpg";

const BenifetsSection = () => {
  return (
    <Benifets>
      <Description>
        <h2>High-Quality learning systems</h2>
        <div className="benefit">
          <h3>Online Learning</h3>
          <h3>High experienced talented mentors</h3>
          <h3>Fast learning systems</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <>
        <img src={homeIntro2} alt="a girl in the library" />
      </>
    </Benifets>
  );
};
// styled
const Benifets = styled(About)`
  flex-direction: row-reverse;
  img {
    width: 50%;
    height: 80vh;
    object-fit: cover;
  }
  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
    margin: 0rem 0rem 0rem 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0rem 0rem 5rem;
    width: 70%;
    clip-path: polygon(0% 10%, 100% 0%, 100% 91%, 0% 100%);
    border-left: 2px solid #30bee1;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    img {
      width: 100%;
      height: 50vh;
    }
    h2 {
      margin: 0rem 0rem 0rem 0rem;
    }
    h3 {
      margin: 1rem 0rem 1rem 0rem;
      width: 100%;
    }
  }
`;

export default BenifetsSection;
