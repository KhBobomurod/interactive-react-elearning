import React from "react";
// import images
import homeIntro from "../img/home-intro.jpg";
// import styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>you <span>can change</span></h2>
          </Hide>
          <Hide>
            <h2>the world.</h2>
          </Hide>
        </div>
        <p>
          An education mind can teach many. An educated mind is better than
          empty one.
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="man reading book" />
      </Image>
    </About>
  );
};

// styled components
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

export default AboutSection;
