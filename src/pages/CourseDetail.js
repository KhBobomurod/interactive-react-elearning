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
import CourseTest from "../components/CourseTest";

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
            <CourseOverview
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
              <Awards>
                {course.awards.map((award) => (
                  <Award
                    key={award.title}
                    title={award.title}
                    description={award.description}
                    definition={award.definition}
                    price={award.price}
                  />
                ))}
              </Awards>
              <button onClick={() => setShowLessons(true)}>
                Darslarni boshlash
              </button>
            </CourseOverview>
          )}

          {/* Darslar bo‘limi */}
          {showLessons && (
            <>
              <Lessons
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>
                  Dars {currentLesson + 1}:{" "}
                  {course.lessons[currentLesson].title}
                </h3>
                <Lesson {...course.lessons[currentLesson]} />
                <CourseTest
                  questions={course.lessons[currentLesson].questions}
                />
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

  const submitAnswer = (taskContent, correctAnswer) => {
    if (answer.trim() === "") {
      alert("Iltimos, javob kiriting!");
      return;
    }
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      alert("To‘g‘ri javob!");
    } else {
      alert("Noto‘g‘ri javob. Qayta urinib ko‘ring!");
    }
    setAnswer("");
  };
  return (
    <StyledLesson>
      <h4>{title}</h4>
      <p>Davomiyligi: {duration}</p>
      <div className="video">
        <iframe
          width="100%"
          height="100%"
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
                <button onClick={() => submitAnswer(task.content, task.answer)}>
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

// Award komponenti
const Award = ({ title, description, definition, price }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
      <h4>{definition}</h4>
      <p>
        <strong>Narxi:</strong> {price}
      </p>
    </StyledAward>
  );
};

// Styled Components
const Details = styled(motion.div)`
  color: #fff;
  background: #1b1b1b;
  min-height: 100vh;
`;

const Header = styled.div`
  min-height: 60vh;
  padding-top: 15vh;
  position: relative;
  h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    min-height: 50vh;
    padding-top: 10vh;
    h2 {
      font-size: 2rem;
      top: 8%;
    }
    img {
      height: 40vh;
    }
  }
  @media (max-width: 768px) {
    min-height: 40vh;
    padding-top: 8vh;
    h2 {
      font-size: 1.8rem;
      top: 5%;
    }
    img {
      height: 30vh;
    }
  }
  @media (max-width: 480px) {
    min-height: 35vh;
    padding-top: 5vh;
    h2 {
      font-size: 1.5rem;
      top: 3%;
      margin-bottom: 1rem;
    }
    img {
      margin-top: 1rem;
      height: 25vh;
    }
  }
`;

const CourseOverview = styled(motion.div)`
  padding: 3rem 5rem;
  background: #222;
  border-radius: 0.5rem;
  margin: 1rem 0;
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .overview-details {
    margin: 1.5rem 0;
    p {
      font-size: 1.1rem;
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
    padding: 0.8rem 1.5rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 0.3rem;
    transition: background 0.3s ease;
    &:hover {
      background: #1a9cbf;
    }
  }
  @media (max-width: 1300px) {
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
    }
  }
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    h3 {
      font-size: 1.6rem;
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
    }
  }
  @media (max-width: 480px) {
    padding: 1rem 1rem;
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.85rem;
    }
    .overview-details p {
      font-size: 0.85rem;
    }
    button {
      font-size: 0.85rem;
      padding: 0.6rem 1rem;
      width: 100%;
    }
  }
`;

const Banner = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  @media (max-width: 1300px) {
    img {
      height: 20vh;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 15vh;
    }
  }
  @media (max-width: 480px) {
    img {
      height: 12vh;
    }
  }
`;

const BannerTitle = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 1300px) {
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Awards = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const StyledAward = styled.div`
  padding: 1.5rem;
  background: #333;
  border-radius: 0.5rem;
  width: 30%;
  text-align: center;
  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  .line {
    width: 50%;
    background: #30bee1;
    height: 0.3rem;
    margin: 0.5rem auto;
  }
  p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  h4 {
    font-size: 1.1rem;
    color: #30bee1;
    margin: 0.5rem 0;
  }
  @media (max-width: 1300px) {
    width: 32%;
    padding: 1.2rem;
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.85rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
    h4 {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 480px) {
    padding: 0.8rem;
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.75rem;
    }
    h4 {
      font-size: 0.85rem;
    }
  }
`;

const Lessons = styled(motion.div)`
  padding: 3rem 5rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 3rem;
    h3 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    h3 {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 480px) {
    padding: 1rem 1rem;
    h3 {
      font-size: 1.4rem;
    }
  }
`;

const StyledLesson = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #333;
  border-radius: 0.5rem;
  h4 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  p {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  .video {
    margin: 1rem 0;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }
  .text {
    margin: 1rem 0;
  }
  .tasks {
    margin-top: 1rem;
    h5 {
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }
    button {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      background: #30bee1;
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 0.9rem;
      border-radius: 0.3rem;
    }
  }
  @media (max-width: 1300px) {
    padding: 1.2rem;
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    .tasks {
      h5 {
        font-size: 1.3rem;
      }
      input,
      button {
        font-size: 0.85rem;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    h4 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.9rem;
    }
    .tasks {
      h5 {
        font-size: 1.2rem;
      }
      input,
      button {
        font-size: 0.8rem;
      }
    }
  }
  @media (max-width: 480px) {
    padding: 0.8rem;
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.85rem;
    }
    .tasks {
      h5 {
        font-size: 1.1rem;
      }
      input,
      button {
        font-size: 0.75rem;
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
    padding: 0.8rem 1.5rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 0.3rem;
  }
  p {
    margin-top: 0.8rem;
    font-size: 1.1rem;
  }
  @media (max-width: 1300px) {
    button {
      font-size: 1rem;
      padding: 0.7rem 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    button {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 480px) {
    button {
      font-size: 0.85rem;
      padding: 0.5rem 0.8rem;
      width: 100%;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

const Navigation = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  button {
    padding: 0.8rem 1.5rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 0.3rem;
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
  @media (max-width: 1300px) {
    button {
      font-size: 1rem;
      padding: 0.7rem 1.2rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    button {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    button {
      font-size: 0.85rem;
      padding: 0.5rem 0.8rem;
    }
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      height: 60vh;
    }
  }
  @media (max-width: 768px) {
    img {
      height: 40vh;
    }
  }
  @media (max-width: 480px) {
    img {
      height: 30vh;
    }
  }
`;

export default CourseDetail;
