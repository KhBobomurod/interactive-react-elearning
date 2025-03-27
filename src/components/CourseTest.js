// src/components/CourseTest.js
import React, { useState } from "react";
import styled from "styled-components";
import { jsPDF } from "jspdf";

const CourseTest = ({
  courseId,
  courseTitle,
  lessonId, // Dars ID'si
  questions, // Dars uchun savollar
  onCompleteLessonTest, // Dars testini tugatish uchun callback
  isFinalTest, // Bu umumiy test ekanligini ko‘rsatadi
  onFinalTestComplete, // Umumiy testni tugatish uchun callback
}) => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({});
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );
  const [isEmailSet, setIsEmailSet] = useState(
    !!localStorage.getItem("userEmail")
  );

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

    if (isFinalTest) {
      // Umumiy test uchun
      if (onFinalTestComplete) {
        onFinalTestComplete(finalScore);
      }
    } else {
      // Dars testini tugatish
      if (onCompleteLessonTest) {
        onCompleteLessonTest(lessonId, finalScore);
      }
    }
  };

  const generateCertificate = () => {
    if (!userEmail) {
      alert("Iltimos, emailingizni kiriting!");
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
    doc.text(`Sertifikat`, 105, 50, { align: "center" });
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`${userName} (${userEmail})`, 105, 70, { align: "center" });
    doc.text(`muvaffaqiyatli yakunladi`, 105, 90, { align: "center" });
    doc.text(`${courseTitle} kursini`, 105, 110, { align: "center" });
    const safeEmail = userEmail.replace(/[@.]/g, "_");
    doc.save(`${safeEmail}_certificate.pdf`);
  };

  return (
    <StyledTest>
      <h3>{isFinalTest ? `Umumiy Test: ${courseTitle}` : `Dars Testi`}</h3>

      {!isEmailSet && (
        <div className="email-form">
          <p>Iltimos, emailingizni kiriting:</p>
          <form onSubmit={handleSetEmail}>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Emailingiz"
              required
            />
            <button type="submit">Emailni Saqlash</button>
          </form>
        </div>
      )}

      {isEmailSet && score === null ? (
        <>
          {questions.length > 0 ? (
            questions.map((q) => (
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
            ))
          ) : (
            <p>
              Bu test uchun savollar topilmadi. O‘qituvchiga murojaat qiling.
            </p>
          )}
          <button onClick={handleSubmit} disabled={questions.length === 0}>
            Testni Yuborish
          </button>
        </>
      ) : (
        isEmailSet && (
          <div className="result">
            <h3>Sizning natijangiz: {score}%</h3>
            {isFinalTest ? (
              score >= 80 ? (
                <button onClick={generateCertificate}>
                  Sertifikatni Yuklab Olish
                </button>
              ) : (
                <p>
                  Sertifikat olish uchun kamida 80% ball to‘plashingiz kerak.
                  Qayta urinib ko‘ring!
                </p>
              )
            ) : (
              <p>
                {score >= 60
                  ? "Tabriklaymiz! Dars testidan o‘tdingiz."
                  : "Afsus! Dars testidan o‘ta olmadingiz. Qayta urinib ko‘ring."}
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
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
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
