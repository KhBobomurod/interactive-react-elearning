import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import CourseState from "../CourseState";
// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const CourseDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  // useEffect
  useEffect(() => {
    const currentCourse = courses.find(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse || null);
  }, [courses, url]);

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
          <Awards>
            {course.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
                defination={award.definition}
                price={award.price}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} alt="secondaryImg" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

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
  }
  h3 {
    font-size: 3.5rem;
    position: absolute;
    top: 10%;
    left: 70%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 0rem;
    text-align: center;
    padding: 2rem 2rem;
  }
`;
// img display
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

// Award
const Award = ({ title, description, price, defination }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
      <h4>{defination}</h4>
      <h3>{price}</h3>
      <Link to="/contact">
        <button>Learn More</button>
      </Link>
    </StyledAward>
  );
};

// Award style
const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  h4 {
    padding: 1rem 0rem;
  }

  .line {
    width: 100%;
    background: #30bee1;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
  button {
    padding: 1rem 3rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
  }
`;

export default CourseDetail;
