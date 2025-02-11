import React from "react";
// import styled
import styled from "styled-components";
import { About } from "../styles";
import { LayoutGroup } from "framer-motion";
// toggle
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="Can I learn programming from 0 on your platform?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                voluptate.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="How much should I have to pay per month?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                voluptate.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Is it possible to pay in full one go?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                voluptate.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="If I buy the course, can my brother and I Also Study? ">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                voluptate.
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    p {
      padding: 1rem 0rem;
    }
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  @media (max-width: 1300px) {
    display: block;
    h2 {
      font-size: 2.1rem;
    }
    h3{
      font-size: 1.5rem;
    }
    h4{
      font-size: 1.3rem;
      font-weight: 500;
    }
    .faq-line {
      margin: 1rem 0rem;
    }
    span {
      display: inline-block;
      margin-top: 0.5rem;
    }
  }
`;

export default FaqSection;
