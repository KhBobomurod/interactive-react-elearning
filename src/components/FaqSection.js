// src/components/FaqSection.js
import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import { LayoutGroup } from "framer-motion";
import Toggle from "./Toggle";
import { motion } from "framer-motion";
import { fade } from "../animation";

const FaqSection = () => {
  const faqs = [
    {
      question: "Can I learn programming from 0 on your platform?",
      answer:
        "Yes, absolutely! Our platform offers beginner-friendly courses that start from the basics, guiding you step-by-step to become proficient in programming.",
    },
    {
      question: "How much should I have to pay per month?",
      answer:
        "Our subscription plans start at $10 per month, but we also offer a one-time payment option for lifetime access to specific courses.",
    },
    {
      question: "Is it possible to pay in full one go?",
      answer:
        "Yes, you can pay for the entire course upfront and get lifetime access without any recurring fees.",
    },
    {
      question: "If I buy the course, can my brother and I also study?",
      answer:
        "Each course purchase is tied to a single user account for personalized progress tracking. However, you can share the course materials informally with your brother.",
    },
  ];

  return (
    <Faq>
      <motion.h2 variants={fade}>
        Any Questions <span>FAQ</span>
      </motion.h2>
      <LayoutGroup>
        {faqs.map((faq, index) => (
          <Toggle key={index} title={faq.question}>
            <motion.div className="question" variants={fade}>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          </Toggle>
        ))}
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  padding: 5rem 10rem;
  background: linear-gradient(135deg, #222 0%, #1b1b1b 100%);
  h2 {
    padding-bottom: 3rem;
    font-weight: lighter;
    text-align: center;
  }
  .toggle {
    background: #333;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    margin: 1rem auto;
    max-width: 1200px; /* Keng ekranlarda maksimal kenglik */
    width: 100%; /* Kenglikni to‘liq ishlatish */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Soya qo‘shdik */
    transition: all 0.3s ease;
    &:hover {
      background: #3a3a3a;
      transform: translateY(-3px);
    }
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
    user-select: none; /* Matnni belgilab bo‘lmaydigan qilish */
    -webkit-user-select: none; /* WebKit brauzerlari uchun */
    -moz-user-select: none; /* Firefox uchun */
    -ms-user-select: none; /* IE/Edge uchun */
  }
  .answer {
    p {
      padding: 0.5rem 0rem;
      font-size: 1.1rem;
      user-select: none; /* Matnni belgilab bo‘lmaydigan qilish */
      -webkit-user-select: none; /* WebKit brauzerlari uchun */
      -moz-user-select: none; /* Firefox uchun */
      -ms-user-select: none; /* IE/Edge uchun */
    }
  }
  .faq-line {
    background: #30bee1;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  @media (max-width: 1300px) {
    padding: 3rem 5rem;
    h2 {
      font-size: 2.5rem;
    }
    .toggle {
      padding: 1rem;
      max-width: 100%; /* Kichik ekranlarda to‘liq kenglik */
    }
    .answer p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 3rem;
    h2 {
      font-size: 2rem;
    }
    .toggle {
      padding: 0.8rem;
    }
    .answer p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    h2 {
      font-size: 1.8rem;
    }
    .toggle {
      padding: 0.6rem;
    }
    .answer p {
      font-size: 0.85rem;
    }
  }
`;

export default FaqSection;
