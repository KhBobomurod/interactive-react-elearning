// src/pages/CourseDetail.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CourseState from "../CourseState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { useDispatch, useSelector } from "react-redux";
import Editor from "@monaco-editor/react";
import checkCode from "../utils/codeChecker";
import { FaClock, FaLevelUpAlt, FaUsers, FaBook } from "react-icons/fa";

const CourseDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses] = useState(CourseState);
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showLessons, setShowLessons] = useState(false);
  const dispatch = useDispatch();
  const completedLessons = useSelector((state) => state.completedLessons);

  useEffect(() => {
    const currentCourse = courses.find(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse || null);
  }, [courses, url]);

  const nextLesson = () => {
    if (course && currentLesson < course.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const markLessonComplete = (lessonId) => {
    dispatch({ type: "COMPLETE_LESSON", payload: lessonId });
  };

  const markLessonIncomplete = (lessonId) => {
    dispatch({ type: "MARK_INCOMPLETE", payload: lessonId });
  };

  return (
    <>
      {course && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="mainImg" />
          </Header>

          {/* Kurs haqida ma’lumot bo‘limi */}
          {!showLessons && (
            <CourseOverview>
              <Banner>
                <img src={course.secondaryImg} alt="course-banner" />
                <BannerTitle>Kursga xush kelibsiz!</BannerTitle>
              </Banner>

              <h3>Kurs haqida</h3>
              <p>{course.overview.description}</p>
              <div className="overview-details">
                <p>
                  <FaClock className="icon" />{" "}
                  <strong>Umumiy davomiylik:</strong>{" "}
                  {course.overview.totalDuration}
                </p>
                <p>
                  <FaLevelUpAlt className="icon" /> <strong>Daraja:</strong>{" "}
                  {course.overview.level}
                </p>
                <p>
                  <FaUsers className="icon" /> <strong>Kimga mos:</strong>{" "}
                  {course.overview.targetAudience}
                </p>
                <p>
                  <FaBook className="icon" />{" "}
                  <strong>Oldindan talab qilinadigan bilimlar:</strong>{" "}
                  {course.overview.prerequisites}
                </p>
              </div>
              <button onClick={() => setShowLessons(true)}>
                Darslarni boshlash
              </button>
            </CourseOverview>
          )}

          {/* Darslar bo‘limi */}
          {showLessons && (
            <>
              <Lessons>
                <h3>
                  Dars {currentLesson + 1}:{" "}
                  {course.lessons[currentLesson].title}
                </h3>
                <Lesson {...course.lessons[currentLesson]} />
                <Progress>
                  {completedLessons[course.lessons[currentLesson].id] ? (
                    <>
                      <p>Tugatildi!</p>
                      <button
                        onClick={() =>
                          markLessonIncomplete(course.lessons[currentLesson].id)
                        }
                      >
                        Tugallanmadi
                      </button>
                    </>
                  ) : (
                    <>
                      <p>Tugallanmadi</p>
                      <button
                        onClick={() =>
                          markLessonComplete(course.lessons[currentLesson].id)
                        }
                      >
                        Darsni tugatdim
                      </button>
                    </>
                  )}
                </Progress>
                <Navigation>
                  <button onClick={prevLesson} disabled={currentLesson === 0}>
                    Oldingi dars
                  </button>
                  <button
                    onClick={nextLesson}
                    disabled={currentLesson === course.lessons.length - 1}
                  >
                    Keyingi dars
                  </button>
                </Navigation>
              </Lessons>
              <ImageDisplay>
                <img src={course.secondaryImg} alt="secondaryImg" />
              </ImageDisplay>
            </>
          )}
        </Details>
      )}
    </>
  );
};

// Lesson komponenti
const Lesson = ({ title, video, text, tasks, duration }) => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");

  const submitAnswer = (taskContent) => {
    console.log(`Javob yuborildi: ${answer} uchun ${taskContent}`);
    setAnswer("");
  };

  return (
    <StyledLesson>
      <h4>{title}</h4>
      <p>Davomiyligi: {duration}</p>
      <div className="video">
        <iframe
          width="100%"
          height="500"
          src={video.replace("watch?v=", "embed/")}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text">{text}</p>
      <div className="tasks">
        <h5>Uyga vazifa va savollar:</h5>
        {tasks.map((task, index) => (
          <div key={index}>
            {task.type === "task" && (
              <>
                <p>Vazifa: {task.content}</p>
                <Editor
                  height="150px"
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  value={code}
                  onChange={(newCode) => setCode(newCode)}
                />
                <button
                  onClick={() => checkCode(task.content, code, setResult)}
                >
                  Tekshirish
                </button>
                <p>{result}</p>
              </>
            )}
            {task.type === "question" && (
              <>
                <p>Savol: {task.content}</p>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Javobingizni kiriting"
                />
                <button onClick={() => submitAnswer(task.content)}>
                  Yuborish
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </StyledLesson>
  );
};

// Styled Components
const Details = styled(motion.div)`
  color: #fff;
`;

const Header = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    font-size: 3rem;
    text-align: center;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    padding-top: 30vh;
    h2 {
      font-size: 2.5rem;
    }
    img {
      height: 50vh;
    }
  }
  @media (max-width: 768px) {
    padding-top: 20vh;
    h2 {
      font-size: 2rem;
      top: 15%;
    }
    img {
      height: 40vh;
    }
  }
  @media (max-width: 480px) {
    padding-top: 15vh;
    h2 {
      font-size: 1.5rem;
      top: 10%;
    }
    img {
      height: 30vh;
    }
  }
`;

const CourseOverview = styled.div`
  padding: 5rem 10rem;
  background: #222;
  border-radius: 0.5rem;
  margin: 2rem 0;
  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .overview-details {
    margin: 2rem 0;
    p {
      font-size: 1.2rem;
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      .icon {
        margin-right: 0.5rem;
        color: #30bee1;
      }
    }
  }
  button {
    padding: 1rem 2rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    transition: background 0.3s ease;
    &:hover {
      background: #1a9cbf;
    }
  }
  @media (max-width: 1300px) {
    padding: 3rem 5rem;
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
    .overview-details p {
      font-size: 1.1rem;
    }
    button {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 3rem;
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
    .overview-details p {
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
    .overview-details p {
      font-size: 0.9rem;
    }
    button {
      font-size: 0.9rem;
      padding: 0.7rem 1.2rem;
      width: 100%;
    }
  }
`;

const Banner = styled.div`
  position: relative;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  @media (max-width: 1300px) {
    img {
      height: 25vh;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 20vh;
    }
  }
  @media (max-width: 480px) {
    img {
      height: 15vh;
    }
  }
`;

const BannerTitle = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 1300px) {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Lessons = styled.div`
  padding: 5rem 10rem;
  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 1300px) {
    padding: 3rem 5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 768px) {
    padding: 2rem 3rem;
    h3 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const StyledLesson = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: #333;
  border-radius: 0.5rem;
  h4 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  .video {
    margin: 1rem 0;
    iframe {
      width: 100%;
      height: 200px;
    }
  }
  .text {
    margin: 1rem 0;
  }
  .tasks {
    margin-top: 1rem;
    h5 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      margin: 0.5rem 0;
      font-size: 1rem;
    }
    button {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      background: #30bee1;
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 1rem;
      border-radius: 0.3rem;
    }
  }
  @media (max-width: 1300px) {
    padding: 1.5rem;
    h4 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.1rem;
    }
    .video iframe {
      height: 180px;
    }
    .tasks {
      h5 {
        font-size: 1.4rem;
      }
      input,
      button {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    h4 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
    .video iframe {
      height: 150px;
    }
    .tasks {
      h5 {
        font-size: 1.3rem;
      }
      input,
      button {
        font-size: 0.9rem;
      }
    }
  }
  @media (max-width: 480px) {
    padding: 0.8rem;
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
    .video iframe {
      height: 120px;
    }
    .tasks {
      h5 {
        font-size: 1.2rem;
      }
      input,
      button {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
      }
    }
  }
`;

const Progress = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    padding: 1rem 2rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 0.3rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  @media (max-width: 1300px) {
    button {
      font-size: 1.1rem;
      padding: 0.8rem 1.5rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 768px) {
    button {
      font-size: 1rem;
      padding: 0.7rem 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    button {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
      width: 100%;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const Navigation = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  button {
    padding: 1rem 2rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 0.3rem;
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
  @media (max-width: 1300px) {
    button {
      font-size: 1.1rem;
      padding: 0.8rem 1.5rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    button {
      font-size: 1rem;
      padding: 0.7rem 1.2rem;
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    button {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      height: 70vh;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 50vh;
    }
  }
  @media (max-width: 480px) {
    img {
      height: 40vh;
    }
  }
`;



export default CourseDetail;
