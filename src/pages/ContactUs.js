// src/pages/Contact.js
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, fade, titleAnim } from "../animation";
import emailjs from "@emailjs/browser"; // EmailJS’ni import qilamiz

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(""); // Muvaffaqiyat xabarini ko‘rsatish uchun
  const [error, setError] = useState(""); // Xato xabarini ko‘rsatish uchun
  const [loading, setLoading] = useState(false); // Yuklanish holati

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tasdiqlash oynasi
    const confirmSend = window.confirm("Xabarni yuborishni tasdiqlaysizmi?");
    if (!confirmSend) return;

    setLoading(true);
    setError("");
    setSuccess("");

    // EmailJS orqali xabar yuborish
    emailjs
      .send(
        "service_q4qmgpy", // Service ID
        "template_d4xsgla", // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "oivxfAGIB_SFedgFO" // User ID
      )
      .then(
        (result) => {
          setSuccess("Xabar muvaffaqiyatli yuborildi!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          setError(
            "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring."
          );
          setLoading(false);
        }
      );
  };

  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={titleAnim}>Contact Us</motion.h2>
      <motion.p variants={fade}>
        Have any questions? Feel free to reach out to us!
      </motion.p>
      {success && <SuccessMessage variants={fade}>{success}</SuccessMessage>}
      {error && <ErrorMessage variants={fade}>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <motion.div variants={fade}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </motion.div>
        <motion.div variants={fade}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </motion.div>
        <motion.div variants={fade}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </motion.div>
        <motion.button type="submit" variants={fade} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </Form>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 2rem 4rem;
  background: #1b1b1b;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto; /* Agar kontent ekrandan chiqib ketsa, scroll qilish uchun */
  h2 {
    font-weight: lighter;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 3rem;
  }
`;

const Form = styled.form`
  max-width: 600px;
  width: 100%; /* Forma kengligini to‘liq qilamiz */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  label {
    font-size: 1.1rem;
    color: #ccc;
    display: block; /* Label’ni har doim input ustida joylashishi uchun */
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 2px solid #30bee1;
    border-radius: 0.5rem;
    background: #333;
    color: #fff;
    outline: none;
    &:focus {
      border-color: #1a9cbf;
      box-shadow: 0 0 5px rgba(48, 190, 225, 0.5); /* Fokuslanganda effek qo‘shish */
    }
  }
  input::placeholder,
  textarea::placeholder {
    color: #999;
    opacity: 0.8;
  }
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  button {
    align-self: center;
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    background: #30bee1;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
    transition: background 0.3s ease;
    &:hover:not(:disabled) {
      background: #1a9cbf;
    }
  }
`;

const SuccessMessage = styled(motion.p)`
  color: #55ff55;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const ErrorMessage = styled(motion.p)`
  color: #ff5555;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const mediaQueries = `
  @media (max-width: 1300px) {
    ${StyledContact} {
      padding: 4rem 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.1rem;
    }
    ${Form} {
      gap: 1.5rem;
      label {
        font-size: 1rem;
      }
      input,
      textarea {
        font-size: 1rem;
        padding: 0.8rem;
      }
      textarea {
        min-height: 150px;
      }
      button {
        font-size: 1rem;
        padding: 0.8rem 2rem;
      }
    }
    ${SuccessMessage}, ${ErrorMessage} {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    ${StyledContact} {
      padding: 2rem 2rem;
      padding-top: 5rem; /* Navigatsiyadan keyin bo‘shliq qoldirish uchun */
      justify-content: flex-start; /* Kontentni tepadan boshlash */
      min-height: auto; /* Min-height’ni olib tashlaymiz */
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    ${Form} {
      gap: 1.5rem; /* Bo‘shliqni oshiramiz */
      label {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      input,
      textarea {
        font-size: 1.1rem; /* Font o‘lchamini kattalashtiramiz */
        padding: 0.9rem; /* Padding’ni oshiramiz */
      }
      textarea {
        min-height: 160px; /* Textarea balandligini oshiramiz */
      }
      button {
        font-size: 1.1rem;
        padding: 0.9rem 2rem;
        width: 100%; /* Tugma kengligini to‘liq qilamiz */
      }
    }
    ${SuccessMessage}, ${ErrorMessage} {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
  }
  @media (max-width: 480px) {
    ${StyledContact} {
      padding: 1.5rem 1rem;
      padding-top: 4rem; /* Navigatsiyadan keyin bo‘shliq qoldirish uchun */
      justify-content: flex-start; /* Kontentni tepadan boshlash */
      min-height: auto; /* Min-height’ni olib tashlaymiz */
    }
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    ${Form} {
      gap: 1.2rem; /* Bo‘shliqni biroz kamaytiramiz, lekin hali ham qulay */
      label {
        font-size: 0.95rem;
        margin-bottom: 0.4rem;
      }
      input,
      textarea {
        font-size: 1rem; /* Font o‘lchamini yanada kattalashtiramiz */
        padding: 0.8rem; /* Padding’ni yanada oshiramiz */
      }
      textarea {
        min-height: 140px; /* Textarea balandligini oshiramiz */
      }
      button {
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
        width: 100%;
      }
    }
    ${SuccessMessage}, ${ErrorMessage} {
      font-size: 0.9rem;
      margin-bottom: 0.6rem;
    }
  }
  @media (max-width: 320px) {
    ${StyledContact} {
      padding: 1rem 0.5rem;
      padding-top: 3.5rem; /* Navigatsiyadan keyin bo‘shliq qoldirish uchun */
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
    ${Form} {
      gap: 1rem;
      label {
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
      }
      input,
      textarea {
        font-size: 0.95rem;
        padding: 0.7rem;
      }
      textarea {
        min-height: 120px;
      }
      button {
        font-size: 0.95rem;
        padding: 0.7rem 1rem;
      }
    }
    ${SuccessMessage}, ${ErrorMessage} {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }
  }
`;

Form.style = mediaQueries;

export default Contact;
