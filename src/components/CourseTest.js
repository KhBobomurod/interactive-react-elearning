// src/components/CourseTest.js
import React, { useState } from "react";
import styled from "styled-components";
import { jsPDF } from "jspdf";

const CourseTest = ({
  courseId,
  courseTitle,
  questions: propQuestions,
  onCertificateDownload,
}) => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );
  const [isEmailSet, setIsEmailSet] = useState(
    !!localStorage.getItem("userEmail")
  );

  const defaultQuestions = [
    {
      id: 1,
      question: "What is React?",
      options: ["A library", "A framework", "A language", "A database"],
      correct: "A library",
    },
    {
      id: 2,
      question: "What is JSX?",
      options: ["A syntax extension", "A database", "A framework", "A server"],
      correct: "A syntax extension",
    },
  ];

  const questions = propQuestions || defaultQuestions;

  const handleSetEmail = (e) => {
    e.preventDefault();
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
      setIsEmailSet(true);
    }
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correctAnswers++;
      }
    });
    const finalScore = (correctAnswers / questions.length) * 100;
    setScore(finalScore);
  };

  const generateCertificate = () => {
    if (!userEmail) {
      alert("Please enter your email to download the certificate.");
      setIsEmailSet(false);
      return;
    }

    const userName = prompt("Iltimos, ismingizni kiriting:");
    if (!userName) return;

    const doc = new jsPDF();
    doc.setDrawColor(0, 120, 255);
    doc.setLineWidth(1);
    doc.rect(10, 10, 190, 277);
    doc.setFontSize(24);
    doc.setTextColor(0, 120, 255);
    doc.text(`Certificate of Completion`, 105, 50, { align: "center" });
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`This certifies that ${userName}`, 105, 70, { align: "center" });
    doc.text(`(${userEmail})`, 105, 80, { align: "center" });
    doc.text(`has successfully completed the course`, 105, 100, {
      align: "center",
    });
    doc.text(`${courseTitle}`, 105, 120, { align: "center" });
    const safeEmail = userEmail.replace(/[@.]/g, "_");
    doc.save(`${safeEmail}_certificate.pdf`);

    if (onCertificateDownload) {
      onCertificateDownload();
    }
  };
  return (
    <StyledTest>
      <h3>Test for {courseTitle}</h3>

      {!isEmailSet && (
        <div className="email-form">
          <p>Please enter your email to proceed:</p>
          <form onSubmit={handleSetEmail}>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
            <button type="submit">Save Email</button>
          </form>
        </div>
      )}

      {isEmailSet && score === null ? (
        <>
          {questions.map((q) => (
            <div key={q.id} className="question">
              <p>{q.question}</p>
              {q.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    onChange={() => handleAnswer(q.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit Test</button>
        </>
      ) : (
        isEmailSet && (
          <div className="result">
            <h3>Your Score: {score}%</h3>
            {score >= 80 ? (
              <button onClick={generateCertificate}>
                Download Certificate
              </button>
            ) : (
              <p>
                You need at least 80% to download the certificate. Please try
                again!
              </p>
            )}
          </div>
        )
      )}
    </StyledTest>
  );
};

const StyledTest = styled.div`
  padding: 2rem;
  background: #333;
  border-radius: 0.5rem;
  color: #fff;
  margin-top: 1.5rem;
  .email-form {
    text-align: center;
    margin-bottom: 2rem;
    p {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 400px;
      margin: 0 auto;
      input {
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
      button {
        padding: 0.8rem 2rem;
        font-size: 1.1rem;
        background: #30bee1;
        border: none;
        border-radius: 0.5rem;
        color: #fff;
        cursor: pointer;
        transition: background 0.3s ease;
        &:hover {
          background: #1a9cbf;
        }
      }
    }
  }
  .question {
    margin-bottom: 1.5rem;
    p {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    label {
      display: block;
      margin: 0.3rem 0;
      input {
        margin-right: 0.5rem;
      }
    }
  }
  button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
    background: #30bee1;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
      background: #1a9cbf;
    }
  }
  .result {
    text-align: center;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1rem;
      color: #ff5555;
    }
  }
`;

export default CourseTest;
