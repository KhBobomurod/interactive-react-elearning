import React from "react";
// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const Contact = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ContactStyle className="contact">
        <h1>Contact Us</h1>
        <p>
          The quickest way to get in touch with us is by using the contact
          information below.
        </p>
        <p>
          If you have any questions or concerns, please don't hesitate to
          contact us. We look forward to hearing from you!
        </p>
        <Items>
          <motion.div className="contact-item">
            <h3>Learners</h3>
            <div className="line"></div>
            <p>
              Visit our{" "}
              <a href="!#" target="_blank">
                Help Center
              </a>{" "}
            </p>
            <p>
              <a href="!#" target="_blank">
                How to reach our support team
              </a>
            </p>
          </motion.div>
          <motion.div className="contact-item">
            <h3>e-Learning Business</h3>
            <div className="line"></div>
            <p>
              Visit our{" "}
              <a href="!#" target="_blank">
                Help Center
              </a>
            </p>
            <p>
              Enterprise{" "}
              <a href="!#" target="_blank">
                New Customer Inquiry
              </a>
            </p>
          </motion.div>
          <motion.div className="contact-item">
            <h3>Partners</h3>
            <div className="line"></div>
            <p>
              Visit our{" "}
              <a href="!#" target="_blank">
                Help Center
              </a>
            </p>
          </motion.div>
          <motion.div className="contact-item">
            <h3>Press</h3>
            <div className="line"></div>
            <p>
              View{" "}
              <a href="!#" target="_blank">
                general information
              </a>
            </p>
            <p>
              Email{" "}
              <a href="!#" target="_blank">
                press@e-learning.com
              </a>
            </p>
          </motion.div>
          <motion.div className="contact-item">
            <h3>Privacy</h3>
            <div className="line"></div>
            <p>
              View{" "}
              <a href="!#" target="_blank">
                privacy policy
              </a>
            </p>
            <p>
              Email{" "}
              <a href="!#" target="_blank">
                privacy@e-learning.com
              </a>
            </p>
            <p>
              Mail: e-Learning, Inc. Attn: Privacy 1000 e-Learning Way, Mountain
              View, CA 94043
            </p>
          </motion.div>
          <motion.div className="contact-item">
            <h3>Contact us</h3>
            <div className="line"></div>
            <p>
              Email{" "}
              <a href="mailto: khudayberganovbobomurod@gmail.com">
                contact@e-learning.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+998935555555">+99888 144 17 00 </a>
            </p>
          </motion.div>
        </Items>
      </ContactStyle>
    </motion.div>
  );
};

// motion.div style
const ContactStyle = styled(motion.div)`
  padding: 2rem 5rem;
  color: #ccc;
  h1 {
    padding: 1rem 0rem;
    font-size: 3rem;
    text-align: center;
  }
  p {
    padding: 1rem 0rem;
    text-align: center;
  }
  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    grid-template-rows: 1fr;
    width: 100%;
  }
  .contact-item {
    display: block;
    flex: 1;
    width: 30%;
    background: #333;
    padding: 2rem;
    border-radius: 0.5rem;
    margin: 0rem 1rem;
    h3 {
      padding: 1rem 0rem;
      font-size: 2rem;
    }
    p {
      padding: 1rem 0rem;
    }
    a {
      color: #30bee1;
    }
    .line {
      width: 100%;
      background: #30bee1;
      height: 0.3rem;
      margin: 1rem 0rem;
    }
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    .contact {
      display: block;
    }
    .contact-item {
      width: 100%;
      margin: 2rem 0rem;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    .contact-item h3 {
      font-size: 1.2rem;
    }
    .contact-item p {
      font-size: 1rem;
    }
    .contact-item a {
      font-size: 1rem;
    }
  }
`;

const Items = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem;
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    grid-template-rows: auto;
    width: 100%;
    margin: 2rem 0rem;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    .contact-item {
      width: 100%;
      margin: 2rem 0rem;
    }
  }
`;

export default Contact;
