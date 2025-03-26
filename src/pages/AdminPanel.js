// src/pages/AdminPanel.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, fade, titleAnim } from "../animation";

const AdminPanel = () => {
  const [messages, setMessages] = useState([]); // Xabarlarni saqlash uchun holat
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Autentifikatsiya holati
  const [password, setPassword] = useState(""); // Parol kiritish uchun holat
  const [editMessage, setEditMessage] = useState(null); // Tahrir qilinayotgan xabar

  // Sahifa yuklanganda localStorage’dan xabarlarni olish
  useEffect(() => {
    try {
      const storedMessages = localStorage.getItem("contactMessages");
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error("Xabarlarni o‘qishda xato:", error);
      setMessages([]);
    }
  }, []);

  // Parolni tekshirish
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      // Oddiy parol (keyin o‘zgartirishingiz mumkin)
      setIsAuthenticated(true);
    } else {
      alert("Noto‘g‘ri parol! Iltimos, qayta urinib ko‘ring.");
    }
  };

  // Xabarni o‘chirish
  const handleDelete = (id) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
  };

  // Xabarni tahrirlashni boshlash
  const handleEdit = (msg) => {
    setEditMessage({ ...msg });
  };

  // Tahrir qilingan xabarni saqlash
  const handleSaveEdit = () => {
    const updatedMessages = messages.map((msg) =>
      msg.id === editMessage.id ? editMessage : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
    setEditMessage(null);
  };

  // Tahrir qilishni bekor qilish
  const handleCancelEdit = () => {
    setEditMessage(null);
  };

  // Agar autentifikatsiya qilinmagan bo‘lsa, parol so‘rash formasi ko‘rsatiladi
  if (!isAuthenticated) {
    return (
      <StyledAdminPanel
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <motion.h2 variants={titleAnim}>Admin Panel</motion.h2>
        <motion.p variants={fade}>
          Please enter the admin password to access the panel.
        </motion.p>
        <LoginForm onSubmit={handleLogin}>
          <motion.div variants={fade}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
            />
          </motion.div>
          <motion.button type="submit" variants={fade}>
            Login
          </motion.button>
        </LoginForm>
      </StyledAdminPanel>
    );
  }

  // Autentifikatsiya qilingan bo‘lsa, admin panel ko‘rsatiladi
  return (
    <StyledAdminPanel
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.h2 variants={titleAnim}>Admin Panel</motion.h2>
      <motion.p variants={fade}>Manage contact form messages below.</motion.p>

      {messages.length === 0 ? (
        <motion.p variants={fade}>No messages found.</motion.p>
      ) : (
        <MessagesSection>
          {messages.map((msg) => (
            <MessageCard key={msg.id} variants={fade}>
              {editMessage && editMessage.id === msg.id ? (
                // Tahrir qilish formasi
                <EditForm>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={editMessage.name}
                    onChange={(e) =>
                      setEditMessage({ ...editMessage, name: e.target.value })
                    }
                  />
                  <label>Email:</label>
                  <input
                    type="email"
                    value={editMessage.email}
                    onChange={(e) =>
                      setEditMessage({ ...editMessage, email: e.target.value })
                    }
                  />
                  <label>Message:</label>
                  <textarea
                    value={editMessage.message}
                    onChange={(e) =>
                      setEditMessage({
                        ...editMessage,
                        message: e.target.value,
                      })
                    }
                  />
                  <div className="edit-buttons">
                    <button type="button" onClick={handleSaveEdit}>
                      Save
                    </button>
                    <button type="button" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  </div>
                </EditForm>
              ) : (
                // Xabar kartasi
                <div className="message-content">
                  <p>
                    <strong>Name:</strong> {msg.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {msg.email}
                  </p>
                  <p>
                    <strong>Message:</strong> {msg.message}
                  </p>
                  <p>
                    <strong>Date:</strong> {msg.date}
                  </p>
                  <div className="message-actions">
                    <EditButton onClick={() => handleEdit(msg)}>
                      Edit
                    </EditButton>
                    <DeleteButton onClick={() => handleDelete(msg.id)}>
                      Delete
                    </DeleteButton>
                  </div>
                </div>
              )}
            </MessageCard>
          ))}
        </MessagesSection>
      )}
    </StyledAdminPanel>
  );
};

const StyledAdminPanel = styled(motion.div)`
  padding: 5rem 10rem;
  background: #1b1b1b;
  color: #fff;
  min-height: 100vh;
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

const LoginForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  label {
    font-size: 1.1rem;
    color: #ccc;
  }
  input {
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
    }
  }
  button {
    align-self: center;
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }
`;

const MessagesSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const MessageCard = styled(motion.div)`
  background: #333;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border-left: 3px solid #30bee1;
  .message-content {
    p {
      padding: 0.3rem 0;
      font-size: 1rem;
      color: #ccc;
      strong {
        color: #fff;
      }
    }
    .message-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
  }
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    font-size: 1.1rem;
    color: #ccc;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 2px solid #30bee1;
    border-radius: 0.5rem;
    background: #444;
    color: #fff;
    outline: none;
    &:focus {
      border-color: #1a9cbf;
    }
  }
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  .edit-buttons {
    display: flex;
    gap: 1rem;
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 0.3rem;
      cursor: pointer;
    }
    button:first-child {
      background: #30bee1;
      color: #fff;
      &:hover {
        background: #1a9cbf;
      }
    }
    button:last-child {
      background: #ccc;
      color: #333;
      &:hover {
        background: #bbb;
      }
    }
  }
`;

const EditButton = styled.button`
  background: #30bee1;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background: #1a9cbf;
  }
`;

const DeleteButton = styled.button`
  background: #ff5555;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background: #cc4444;
  }
`;

const mediaQueries = `
  @media (max-width: 1300px) {
    ${StyledAdminPanel} {
      padding: 3rem 5rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.1rem;
    }
    ${MessageCard} {
      padding: 1rem;
      .message-content p {
        font-size: 0.95rem;
      }
    }
  }
  @media (max-width: 768px) {
    ${StyledAdminPanel} {
      padding: 2rem 3rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    ${LoginForm} {
      input {
        font-size: 0.9rem;
      }
      button {
        font-size: 1rem;
        padding: 0.7rem 1.5rem;
      }
    }
    ${MessageCard} {
      padding: 0.8rem;
      .message-content p {
        font-size: 0.9rem;
      }
      .message-actions {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    ${EditForm} {
      input,
      textarea {
        font-size: 0.9rem;
      }
      .edit-buttons button {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
      }
    }
  }
  @media (max-width: 480px) {
    ${StyledAdminPanel} {
      padding: 1.5rem 1rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.9rem;
    }
    ${LoginForm} {
      input {
        font-size: 0.85rem;
      }
      button {
        font-size: 0.9rem;
        padding: 0.6rem 1.2rem;
        width: 100%;
      }
    }
    ${MessageCard} {
      padding: 0.6rem;
      .message-content p {
        font-size: 0.85rem;
      }
      ${EditButton}, ${DeleteButton} {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
      }
    }
    ${EditForm} {
      input,
      textarea {
        font-size: 0.85rem;
      }
      .edit-buttons button {
        font-size: 0.8rem;
        padding: 0.3rem 0.6rem;
      }
    }
  }
`;

StyledAdminPanel.style = mediaQueries;
MessagesSection.style = mediaQueries;

export default AdminPanel;
