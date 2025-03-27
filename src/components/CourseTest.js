// src/components/CourseTest.js
import React, { useState } from "react";
import styled from "styled-components";

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
    4: [
      {
        id: 1,
        question: "UI/UX dizaynida ranglar qanday tanlanadi?",
        options: [
          "Foydalanuvchi tajribasiga mos ravishda",
          "Tasodifiy tanlanadi",
          "Faqat oq va qora rang ishlatiladi",
          "Ranglar ishlatilmaydi",
        ],
        correct: "Foydalanuvchi tajribasiga mos ravishda",
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
    1: [
      {
        id: 1,
        question: "Kiberxavfsizlik nima uchun muhim?",
        options: [
          "Ma'lumotlarni himoya qilish uchun",
          "Dizayn yaratish uchun",
          "Kod yozish uchun",
          "API chaqirish uchun",
        ],
        correct: "Ma'lumotlarni himoya qilish uchun",
      },
    ],
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
    4: [
      {
        id: 1,
        question: "Kiberxavfsizlikda parollar qanday bo‘lishi kerak?",
        options: [
          "Murakkab va uzun bo‘lishi kerak",
          "Oddiy va qisqa bo‘lishi kerak",
          "Faqat raqamlardan iborat bo‘lishi kerak",
          "Parol kerak emas",
        ],
        correct: "Murakkab va uzun bo‘lishi kerak",
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
    1: [
      {
        id: 1,
        question: "Blokcheyn nima?",
        options: [
          "Taqsimlangan ma'lumotlar bazasi",
          "Dizayn vositasi",
          "Kod yozish tili",
          "API chaqirish vositasi",
        ],
        correct: "Taqsimlangan ma'lumotlar bazasi",
      },
    ],
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

const CourseTest = ({
  courseId,
  courseTitle,
  lessonId,
  isFinalTest = false,
  onCompleteLessonTest,
  onFinalTestComplete,
}) => {
  // courseId va lessonId ni tekshirish uchun konsolga chiqaramiz
  console.log("CourseTest props:", { courseId, lessonId, isFinalTest });

  // Dars yoki umumiy test savollarini tanlash
  const questions = isFinalTest
    ? finalTestQuestions[courseId] || []
    : lessonQuestions[courseId]?.[lessonId] || [];

  // Savollar topilgan-topilmaganligini tekshirish
  console.log("Selected questions:", questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setShowResults(true);
      const finalScore = Math.round(
        ((score + (selectedOption === currentQuestion.correct ? 1 : 0)) /
          questions.length) *
          100
      );

      if (isFinalTest) {
        onFinalTestComplete(finalScore);
      } else {
        onCompleteLessonTest(lessonId, finalScore);
      }
    }
  };

  if (questions.length === 0) {
    return (
      <TestContainer>
        Test uchun savollar topilmadi! courseId: {courseId}, lessonId:{" "}
        {lessonId}
      </TestContainer>
    );
  }

  return (
    <TestContainer>
      {showResults ? (
        <Results>
          <h3>Natija</h3>
          <p>
            Siz {questions.length} ta savoldan {score} tasiga to‘g‘ri javob
            berdingiz.
          </p>
          <p>Umumiy foiz: {Math.round((score / questions.length) * 100)}%</p>
        </Results>
      ) : (
        <Question>
          <h3>
            {isFinalTest ? "Umumiy Test" : `Dars ${lessonId} Testi`}: Savol{" "}
            {currentQuestionIndex + 1}/{questions.length}
          </h3>
          <p>{questions[currentQuestionIndex].question}</p>
          <Options>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </label>
            ))}
          </Options>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            {currentQuestionIndex === questions.length - 1
              ? "Testni Yakunlash"
              : "Keyingi Savol"}
          </button>
        </Question>
      )}
    </TestContainer>
  );
};

// Styled Components
const TestContainer = styled.div`
  padding: 2rem;
  background: #333;
  border-radius: 0.5rem;
  color: #fff;
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
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
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
  @media (max-width: 1300px) {
    padding: 1.5rem;
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
      padding: 0.7rem 1.2rem;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.9rem;
    }
    button {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
  }
  @media (max-width: 480px) {
    padding: 0.8rem;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.85rem;
    }
    button {
      font-size: 0.85rem;
      padding: 0.5rem 0.8rem;
      width: 100%;
    }
  }
`;

const Question = styled.div`
  label {
    display: block;
    margin: 0.5rem 0;
    font-size: 1.1rem;
    input {
      margin-right: 0.5rem;
    }
  }
  @media (max-width: 1300px) {
    label {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    label {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 480px) {
    label {
      font-size: 0.85rem;
    }
  }
`;

const Options = styled.div`
  margin: 1rem 0;
`;

const Results = styled.div`
  text-align: center;
  @media (max-width: 1300px) {
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 480px) {
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

export default CourseTest;
