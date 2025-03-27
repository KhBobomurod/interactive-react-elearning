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
  const [showTest, setShowTest] = useState(false); // Dars testini ko‘rsatish
  const [showFinalTest, setShowFinalTest] = useState(false); // Umumiy testni ko‘rsatish
  const [lessonTestScores, setLessonTestScores] = useState({}); // Dars testlari natijalari
  const dispatch = useDispatch();
  const completedLessons = useSelector((state) => state.completedLessons);

  useEffect(() => {
    const currentCourse = courses.find(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse || null);
  }, [courses, url]);

  // Dars testini tugatish
  const handleCompleteLessonTest = (lessonId, score) => {
    setLessonTestScores((prev) => ({ ...prev, [lessonId]: score }));
    if (score >= 60) {
      dispatch({ type: "COMPLETE_LESSON", payload: lessonId });
      setShowTest(false);
    }
  };

  // Umumiy testni tugatish
  const handleFinalTestComplete = (score) => {
    if (score >= 80) {
      // Umumiy testdan o‘tgan bo‘lsa, sertifikat olish imkoniyati ochiladi
      setShowFinalTest(false);
    }
  };

  const nextLesson = () => {
    if (course && currentLesson < course.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setShowTest(false);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
      setShowTest(false);
    }
  };

  const markLessonComplete = (lessonId) => {
    dispatch({ type: "COMPLETE_LESSON", payload: lessonId });
  };

  const markLessonIncomplete = (lessonId) => {
    dispatch({ type: "MARK_INCOMPLETE", payload: lessonId });
  };

  // Barcha darslar tugallanganligini tekshirish
  const allLessonsCompleted = () => {
    if (!course) return false;
    return course.lessons.every((lesson) => completedLessons[lesson.id]);
  };

  // Dars testiga o‘tish
  const goToLessonTest = () => {
    setShowTest(true);
  };

  // Umumiy testga o‘tish
  const goToFinalTest = () => {
    setShowFinalTest(true);
  };

  // Har bir kurs va dars uchun savollar
  const lessonQuestions = {
    "/react": {
      1: [
        {
          id: 1,
          question: "React nima?",
          options: ["Kutubxona", "Framework", "Til", "Ma'lumotlar bazasi"],
          correct: "Kutubxona",
        },
        {
          id: 2,
          question: "JSX nima?",
          options: [
            "Sintaksis kengaytmasi",
            "Ma'lumotlar bazasi",
            "Framework",
            "Server",
          ],
          correct: "Sintaksis kengaytmasi",
        },
      ],
      2: [
        {
          id: 1,
          question: "State va Props o‘rtasidagi farq nima?",
          options: [
            "State ichki, Props tashqi",
            "Props ichki, State tashqi",
            "Ikkalasi bir xil",
            "Farq yo‘q",
          ],
          correct: "State ichki, Props tashqi",
        },
      ],
      3: [
        {
          id: 1,
          question: "Komponentlar qanday nomlanadi?",
          options: [
            "Katta harf bilan",
            "Kichik harf bilan",
            "Farqi yo‘q",
            "Faqat raqamlar bilan",
          ],
          correct: "Katta harf bilan",
        },
      ],
      4: [
        {
          id: 1,
          question: "componentDidMount qachon ishga tushadi?",
          options: [
            "Komponent render bo‘lganda",
            "Komponent o‘chirilganda",
            "State o‘zgarganda",
            "Props o‘zgarganda",
          ],
          correct: "Komponent render bo‘lganda",
        },
      ],
      5: [
        {
          id: 1,
          question: "useState hook’i nima uchun ishlatiladi?",
          options: [
            "State boshqarish uchun",
            "API chaqirish uchun",
            "Routing uchun",
            "Styling uchun",
          ],
          correct: "State boshqarish uchun",
        },
      ],
      6: [
        {
          id: 1,
          question: "React Router’da Route nima uchun ishlatiladi?",
          options: [
            "Sahifalar o‘rtasida navigatsiya uchun",
            "State boshqarish uchun",
            "API chaqirish uchun",
            "Komponent yaratish uchun",
          ],
          correct: "Sahifalar o‘rtasida navigatsiya uchun",
        },
      ],
      7: [
        {
          id: 1,
          question: "Redux’da createStore nima qiladi?",
          options: [
            "Store yaratadi",
            "Komponent yaratadi",
            "API chaqiradi",
            "Routing qiladi",
          ],
          correct: "Store yaratadi",
        },
      ],
      8: [
        {
          id: 1,
          question: "Todo ilovasida useState qanday ishlatiladi?",
          options: [
            "Vazifalar ro‘yxatini boshqarish uchun",
            "API chaqirish uchun",
            "Routing uchun",
            "Styling uchun",
          ],
          correct: "Vazifalar ro‘yxatini boshqarish uchun",
        },
      ],
    },
    "/javascript": {
      1: [
        {
          id: 1,
          question: "JavaScript’da console.log nima uchun ishlatiladi?",
          options: [
            "Ma'lumotni konsolga chiqarish uchun",
            "Faylni o‘qish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Ma'lumotni konsolga chiqarish uchun",
        },
      ],
      2: [
        {
          id: 1,
          question: "let va const o‘rtasidagi farq nima?",
          options: [
            "let o‘zgaruvchan, const o‘zgarmas",
            "const o‘zgaruvchan, let o‘zgarmas",
            "Ikkalasi bir xil",
            "Farq yo‘q",
          ],
          correct: "let o‘zgaruvchan, const o‘zgarmas",
        },
      ],
      3: [
        {
          id: 1,
          question: "if-else operatori nima uchun ishlatiladi?",
          options: [
            "Shartlarni tekshirish uchun",
            "Massivlarni boshqarish uchun",
            "Funksiyalarni yaratish uchun",
            "API chaqirish uchun",
          ],
          correct: "Shartlarni tekshirish uchun",
        },
      ],
      4: [
        {
          id: 1,
          question: "for tsikli qanday ishlaydi?",
          options: [
            "Takrorlanadigan amallar uchun",
            "Shartlarni tekshirish uchun",
            "Funksiyalarni chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Takrorlanadigan amallar uchun",
        },
      ],
      5: [
        {
          id: 1,
          question: "Funksiyada return nima qiladi?",
          options: [
            "Natijani qaytaradi",
            "Funksiyani to‘xtatadi",
            "Massiv yaratadi",
            "API chaqiradi",
          ],
          correct: "Natijani qaytaradi",
        },
      ],
      6: [
        {
          id: 1,
          question: "forEach metodi nima uchun ishlatiladi?",
          options: [
            "Massiv elementlarini aylanib chiqish uchun",
            "Shartlarni tekshirish uchun",
            "Funksiyalarni yaratish uchun",
            "API chaqirish uchun",
          ],
          correct: "Massiv elementlarini aylanib chiqish uchun",
        },
      ],
      7: [
        {
          id: 1,
          question: "Kalkulyator ilovasida qaysi operatorlar ishlatiladi?",
          options: ["+, -, *, /", "&&, ||", "==, !==", ">, <"],
          correct: "+, -, *, /",
        },
      ],
    },
    "/data-science": {
      1: [
        {
          id: 1,
          question: "Python’da print funksiyasi nima qiladi?",
          options: [
            "Ma'lumotni ekranga chiqaradi",
            "Faylni o‘qish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Ma'lumotni ekranga chiqaradi",
        },
      ],
      2: [
        {
          id: 1,
          question: "pandas’da read_csv nima uchun ishlatiladi?",
          options: [
            "CSV faylni o‘qish uchun",
            "Grafik chizish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
            "Faylni yozish uchun",
          ],
          correct: "CSV faylni o‘qish uchun",
        },
      ],
      3: [
        {
          id: 1,
          question: "matplotlib’da plot nima uchun ishlatiladi?",
          options: [
            "Grafik chizish uchun",
            "Ma'lumotni o‘qish uchun",
            "Faylni yozish uchun",
            "API chaqirish uchun",
          ],
          correct: "Grafik chizish uchun",
        },
      ],
      4: [
        {
          id: 1,
          question: "sklearn’da LinearRegression nima uchun ishlatiladi?",
          options: [
            "Regressiya modeli yaratish uchun",
            "Grafik chizish uchun",
            "Ma'lumotni o‘qish uchun",
            "Faylni yozish uchun",
          ],
          correct: "Regressiya modeli yaratish uchun",
        },
      ],
      5: [
        {
          id: 1,
          question: "predict funksiyasi nima uchun ishlatiladi?",
          options: [
            "Bashorat qilish uchun",
            "Ma'lumotni o‘qish uchun",
            "Grafik chizish uchun",
            "Faylni yozish uchun",
          ],
          correct: "Bashorat qilish uchun",
        },
      ],
    },
    "/ui-ux": {
      1: [
        {
          id: 1,
          question: "Eskiz nima uchun ishlatiladi?",
          options: [
            "Dizayn g‘oyalarini tez shakllantirish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Dizayn g‘oyalarini tez shakllantirish uchun",
        },
      ],
      2: [
        {
          id: 1,
          question: "Figma nima uchun ishlatiladi?",
          options: [
            "Interfeys dizaynini yaratish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Interfeys dizaynini yaratish uchun",
        },
      ],
      3: [
        {
          id: 1,
          question: "Adobe XD’da prototip nima uchun ishlatiladi?",
          options: [
            "Navigatsiyani sinash uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Navigatsiyani sinash uchun",
        },
      ],
      5: [
        {
          id: 1,
          question: "Mobil ilova dizaynida nimalarga e’tibor berish kerak?",
          options: [
            "Foydalanuvchi tajribasiga",
            "Kod yozishga",
            "API chaqirishga",
            "Ma'lumotlar bazasiga ulanishga",
          ],
          correct: "Foydalanuvchi tajribasiga",
        },
      ],
    },
    "/cybersecurity": {
      2: [
        {
          id: 1,
          question: "Tarmoq konfiguratsiyasi tahlili nima uchun muhim?",
          options: [
            "Xavfsizlik zaifliklarini aniqlash uchun",
            "Dizayn yaratish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
          ],
          correct: "Xavfsizlik zaifliklarini aniqlash uchun",
        },
      ],
      3: [
        {
          id: 1,
          question: "Shifrlash algoritmi nima uchun ishlatiladi?",
          options: [
            "Ma'lumotlarni himoya qilish uchun",
            "Dizayn yaratish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
          ],
          correct: "Ma'lumotlarni himoya qilish uchun",
        },
      ],
      5: [
        {
          id: 1,
          question: "Zaifliklarni aniqlash nima uchun muhim?",
          options: [
            "Tizim xavfsizligini oshirish uchun",
            "Dizayn yaratish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
          ],
          correct: "Tizim xavfsizligini oshirish uchun",
        },
      ],
    },
    "/flutter": {
      1: [
        {
          id: 1,
          question: "Flutter nima uchun ishlatiladi?",
          options: [
            "Mobil ilovalar yaratish uchun",
            "Dizayn yaratish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Mobil ilovalar yaratish uchun",
        },
      ],
      2: [
        {
          id: 1,
          question: "Dart’da void nima uchun ishlatiladi?",
          options: [
            "Funksiyaning qaytish qiymati yo‘qligini ko‘rsatish uchun",
            "Massiv yaratish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Funksiyaning qaytish qiymati yo‘qligini ko‘rsatish uchun",
        },
      ],
      3: [
        {
          id: 1,
          question: "Scaffold nima uchun ishlatiladi?",
          options: [
            "Mobil sahifa tuzilmasini yaratish uchun",
            "Dizayn yaratish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Mobil sahifa tuzilmasini yaratish uchun",
        },
      ],
      4: [
        {
          id: 1,
          question: "setState nima uchun ishlatiladi?",
          options: [
            "State’ni yangilash uchun",
            "Dizayn yaratish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "State’ni yangilash uchun",
        },
      ],
      5: [
        {
          id: 1,
          question: "Todo ilovasida List nima uchun ishlatiladi?",
          options: [
            "Vazifalar ro‘yxatini saqlash uchun",
            "Dizayn yaratish uchun",
            "API chaqirish uchun",
            "Ma'lumotlar bazasiga ulanish uchun",
          ],
          correct: "Vazifalar ro‘yxatini saqlash uchun",
        },
      ],
    },
    "/blockchain": {
      2: [
        {
          id: 1,
          question: "Bitcoin tranzaksiyasi qanday ishlaydi?",
          options: [
            "Blokcheyn orqali",
            "Dizayn yaratish orqali",
            "Kod yozish orqali",
            "API chaqirish orqali",
          ],
          correct: "Blokcheyn orqali",
        },
      ],
      3: [
        {
          id: 1,
          question: "Smart kontrakt nima uchun ishlatiladi?",
          options: [
            "Avtomatik tranzaksiyalarni boshqarish uchun",
            "Dizayn yaratish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
          ],
          correct: "Avtomatik tranzaksiyalarni boshqarish uchun",
        },
      ],
      4: [
        {
          id: 1,
          question: "web3 nima uchun ishlatiladi?",
          options: [
            "Blokcheyn bilan ishlash uchun",
            "Dizayn yaratish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
          ],
          correct: "Blokcheyn bilan ishlash uchun",
        },
      ],
      5: [
        {
          id: 1,
          question: "ERC-20 tokeni nima uchun ishlatiladi?",
          options: [
            "Kriptovalyuta yaratish uchun",
            "Dizayn yaratish uchun",
            "Kod yozish uchun",
            "API chaqirish uchun",
          ],
          correct: "Kriptovalyuta yaratish uchun",
        },
      ],
    },
  };

  // Har bir kurs uchun umumiy test savollari
  const finalTestQuestions = {
    "/react": [
      {
        id: 1,
        question: "React kursining asosiy maqsadi nima edi?",
        options: [
          "Frontend dasturlashni o‘rganish",
          "Dizayn qilish",
          "Marketing",
          "Ma'lumotlar bazasi",
        ],
        correct: "Frontend dasturlashni o‘rganish",
      },
      {
        id: 2,
        question: "React’da qaysi texnologiyalar o‘rganildi?",
        options: [
          "React va Redux",
          "Photoshop",
          "SQL",
          "Marketing strategiyalari",
        ],
        correct: "React va Redux",
      },
      {
        id: 3,
        question: "React kursida qanday ilova yaratildi?",
        options: [
          "Todo ilovasi",
          "Dizayn prototipi",
          "Ma'lumotlar bazasi",
          "Marketing rejasi",
        ],
        correct: "Todo ilovasi",
      },
    ],
    "/javascript": [
      {
        id: 1,
        question: "JavaScript kursining asosiy maqsadi nima edi?",
        options: [
          "Dasturlash asoslarini o‘rganish",
          "Dizayn qilish",
          "Marketing",
          "Ma'lumotlar bazasi",
        ],
        correct: "Dasturlash asoslarini o‘rganish",
      },
      {
        id: 2,
        question: "JavaScript’da qaysi tushunchalar o‘rganildi?",
        options: [
          "Tsikllar va funksiyalar",
          "Photoshop",
          "SQL",
          "Marketing strategiyalari",
        ],
        correct: "Tsikllar va funksiyalar",
      },
      {
        id: 3,
        question: "JavaScript kursida qanday ilova yaratildi?",
        options: [
          "Kalkulyator",
          "Dizayn prototipi",
          "Ma'lumotlar bazasi",
          "Marketing rejasi",
        ],
        correct: "Kalkulyator",
      },
    ],
    "/data-science": [
      {
        id: 1,
        question: "Data Science kursining asosiy maqsadi nima edi?",
        options: [
          "Ma'lumotlarni tahlil qilishni o‘rganish",
          "Dizayn qilish",
          "Marketing",
          "Ma'lumotlar bazasi",
        ],
        correct: "Ma'lumotlarni tahlil qilishni o‘rganish",
      },
      {
        id: 2,
        question: "Data Science’da qaysi texnologiyalar o‘rganildi?",
        options: [
          "Pandas va sklearn",
          "Photoshop",
          "SQL",
          "Marketing strategiyalari",
        ],
        correct: "Pandas va sklearn",
      },
      {
        id: 3,
        question: "Data Science kursida qanday natija olindi?",
        options: [
          "Bashorat qilish",
          "Dizayn prototipi",
          "Ma'lumotlar bazasi",
          "Marketing rejasi",
        ],
        correct: "Bashorat qilish",
      },
    ],
    "/ui-ux": [
      {
        id: 1,
        question: "UI/UX kursining asosiy maqsadi nima edi?",
        options: [
          "Foydalanuvchi tajribasini yaxshilashni o‘rganish",
          "Dasturlash",
          "Marketing",
          "Ma'lumotlar bazasi",
        ],
        correct: "Foydalanuvchi tajribasini yaxshilashni o‘rganish",
      },
      {
        id: 2,
        question: "UI/UX’da qaysi vositalar o‘rganildi?",
        options: [
          "Figma va Adobe XD",
          "React",
          "SQL",
          "Marketing strategiyalari",
        ],
        correct: "Figma va Adobe XD",
      },
      {
        id: 3,
        question: "UI/UX kursida qanday loyiha yaratildi?",
        options: [
          "Mobil ilova dizayni",
          "Kalkulyator",
          "Ma'lumotlar bazasi",
          "Marketing rejasi",
        ],
        correct: "Mobil ilova dizayni",
      },
    ],
    "/cybersecurity": [
      {
        id: 1,
        question: "Cybersecurity kursining asosiy maqsadi nima edi?",
        options: [
          "Tizim xavfsizligini o‘rganish",
          "Dizayn qilish",
          "Marketing",
          "Ma'lumotlar bazasi",
        ],
        correct: "Tizim xavfsizligini o‘rganish",
      },
      {
        id: 2,
        question: "Cybersecurity’da qaysi tushunchalar o‘rganildi?",
        options: [
          "Shifrlash va zaifliklar",
          "Photoshop",
          "SQL",
          "Marketing strategiyalari",
        ],
        correct: "Shifrlash va zaifliklar",
      },
      {
        id: 3,
        question: "Cybersecurity kursida qanday tahlil qilindi?",
        options: [
          "Tarmoq konfiguratsiyasi",
          "Dizayn prototipi",
          "Ma'lumotlar bazasi",
          "Marketing rejasi",
        ],
        correct: "Tarmoq konfiguratsiyasi",
      },
    ],
    "/flutter": [
      {
        id: 1,
        question: "Flutter kursining asosiy maqsadi nima edi?",
        options: [
          "Mobil ilovalar yaratishni o‘rganish",
          "Dizayn qilish",
          "Marketing",
          "Ma'lumotlar bazasi",
        ],
        correct: "Mobil ilovalar yaratishni o‘rganish",
      },
      {
        id: 2,
        question: "Flutter’da qaysi texnologiyalar o‘rganildi?",
        options: [
          "Flutter va Dart",
          "Photoshop",
          "SQL",
          "Marketing strategiyalari",
        ],
        correct: "Flutter va Dart",
      },
      {
        id: 3,
        question: "Flutter kursida qanday ilova yaratildi?",
        options: [
          "Todo ilovasi",
          "Dizayn prototipi",
          "Ma'lumotlar bazasi",
          "Marketing rejasi",
        ],
        correct: "Todo ilovasi",
      },
    ],
    "/blockchain": [
      {
        id: 1,
        question: "Blockchain kursining asosiy maqsadi nima edi?",
        options: [
          "Blokcheyn texnologiyasini o‘rganish",
          "Dizayn qilish",
          "Marketing",
          "Ma'lumotlar bazasi",
        ],
        correct: "Blokcheyn texnologiyasini o‘rganish",
      },
      {
        id: 2,
        question: "Blockchain’da qaysi texnologiyalar o‘rganildi?",
        options: [
          "Smart kontraktlar va web3",
          "Photoshop",
          "SQL",
          "Marketing strategiyalari",
        ],
        correct: "Smart kontraktlar va web3",
      },
      {
        id: 3,
        question: "Blockchain kursida qanday loyiha yaratildi?",
        options: [
          "ERC-20 tokeni",
          "Dizayn prototipi",
          "Ma'lumotlar bazasi",
          "Marketing rejasi",
        ],
        correct: "ERC-20 tokeni",
      },
    ],
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
          {showLessons && !showFinalTest && (
            <>
              <Lessons
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {!showTest ? (
                  <>
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
                              markLessonIncomplete(
                                course.lessons[currentLesson].id
                              )
                            }
                          >
                            Tugallanmadi
                          </button>
                        </>
                      ) : (
                        <>
                          <p>Tugallanmadi</p>
                          <button onClick={goToLessonTest}>
                            Dars Testiga O‘tish
                          </button>
                        </>
                      )}
                    </Progress>
                    <Navigation>
                      <button
                        onClick={prevLesson}
                        disabled={currentLesson === 0}
                      >
                        Oldingi dars
                      </button>
                      <button
                        onClick={nextLesson}
                        disabled={currentLesson === course.lessons.length - 1}
                      >
                        Keyingi dars
                      </button>
                    </Navigation>
                    {allLessonsCompleted() && (
                      <button onClick={goToFinalTest}>
                        Umumiy Testga O‘tish
                      </button>
                    )}
                  </>
                ) : (
                  <CourseTest
                    courseId={course.url}
                    courseTitle={course.title}
                    lessonId={course.lessons[currentLesson].id}
                    questions={
                      lessonQuestions[course.url]?.[currentLesson + 1] || [
                        {
                          id: 1,
                          question:
                            "Bu dars uchun savollar hali qo‘shilmagan. O‘qituvchiga murojaat qiling.",
                          options: ["OK"],
                          correct: "OK",
                        },
                      ]
                    }
                    onCompleteLessonTest={handleCompleteLessonTest}
                  />
                )}
              </Lessons>
              <ImageDisplay>
                <img src={course.secondaryImg} alt="secondaryImg" />
              </ImageDisplay>
            </>
          )}

          {/* Umumiy test bo‘limi */}
          {showFinalTest && (
            <Lessons
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CourseTest
                courseId={course.url}
                courseTitle={course.title}
                questions={finalTestQuestions[course.url] || []}
                isFinalTest={true}
                onFinalTestComplete={handleFinalTestComplete}
              />
            </Lessons>
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
  button {
    padding: 0.8rem 1.5rem;
    background: #30bee1;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 0.3rem;
    margin-top: 1rem;
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
