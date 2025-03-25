// src/CourseState.js
import react from "./img/react1.jpg";
import react2 from "./img/react2jpg.jpg";
import js from "./img/js.png";
import js2 from "./img/js2.jpg";
import node from "./img/node.png";
import node2 from "./img/node2.jpg";

export const CourseState = [
  // 1. Interaktiv React va Redux
  {
    title: "React va Redux",
    mainImg: react,
    url: "/courses/react",
    secondaryImg: react2,
    overview: {
      description:
        "Bu kursda siz React va Redux yordamida zamonaviy veb-ilovalarni qurishni o‘rganasiz. Kurs Reactning asosiy tushunchalaridan boshlab, murakkab state boshqaruv va navigatsiyagacha bo‘lgan mavzularni qamrab oladi.",
      totalDuration: "4 soat 40 daqiqa",
      level: "Boshlang‘ich va o‘rta daraja",
      targetAudience:
        "Veb-dasturchilar, React bilan ishlashni boshlamoqchi bo‘lganlar",
      prerequisites: "JavaScript asoslari va HTML/CSS bilimi",
    },
    awards: [
      {
        title: "Standart Paket",
        description: "Kurs videolari va vazifalarga kirish imkoniyati.",
        definition: "Standart",
        price: "$149",
      },
      {
        title: "Premium Paket",
        description: "Videolar, vazifalar va mentor bilan 1:1 sessiyalar.",
        definition: "Premium",
        price: "$229",
      },
      {
        title: "VIP Paket",
        description:
          "Barcha imkoniyatlar + loyiha bo‘yicha qo‘llab-quvvatlash.",
        definition: "VIP",
        price: "$359",
      },
    ],
    lessons: [
      {
        id: 1,
        title: "React bilan tanishuv",
        type: "video",
        video: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        text: "React - bu foydalanuvchi interfeyslarni qurish uchun JavaScript kutubxonasi. Bu darsda Reactning asosiy tushunchalari bilan tanishasiz.",
        tasks: [
          {
            type: "task",
            content:
              "Oddiy 'Salom, Dunyo!' komponentini yarating va uni render qiling.",
          },
        ],
        duration: "20 daqiqa",
      },
      {
        id: 2,
        title: "State va Props",
        type: "video",
        video: "https://www.youtube.com/watch?v=IYvD9oBCuJI",
        text: "State - komponentning ichki holati, Props esa tashqaridan keladigan ma’lumotlar. Bu darsda ularning farqi va qo‘llanilishini o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Bir komponentga props orqali ismingizni yuboring va uni ekranda chiqaring.",
          },
          {
            type: "question",
            content: "State va Props o‘rtasidagi asosiy farq nima?",
            answer: "State ichki, Props tashqi ma’lumot uchun ishlatiladi.",
          },
        ],
        duration: "25 daqiqa",
      },
      {
        id: 3,
        title: "Komponentlar bilan ishlash",
        type: "video",
        video: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
        text: "Reactda komponentlar qayta ishlatiladigan kod bloklari sifatida ishlaydi. Bu darsda bir nechta komponent yaratishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "3 ta komponent yarating: Header, Main va Footer, ularni bir sahifada ko‘rsating.",
          },
          {
            type: "question",
            content:
              "Funksional komponentlar bilan Class komponentlar o‘rtasidagi farq nima?",
            answer:
              "Funksional komponentlar oddiyroq va zamonaviy, Class komponentlar esa lifecycle metodlariga ega.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 4,
        title: "Lifecycle Methods",
        type: "video",
        video: "https://www.youtube.com/watch?v=0UWI6MGftZk",
        text: "Class komponentlarda lifecycle metodlari (masalan, componentDidMount, componentDidUpdate) yordamida komponentning hayotiy davrini boshqarishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "componentDidMount yordamida API’dan ma’lumot oling va ekranda chiqaring.",
          },
          {
            type: "question",
            content: "componentDidMount qachon ishga tushadi?",
            answer:
              "Komponent DOM’ga qo‘shilgandan so‘ng darhol ishga tushadi.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 5,
        title: "Hooks bilan ishlash",
        type: "video",
        video: "https://www.youtube.com/watch?v=TNhaISpJyFU",
        text: "Hooks (useState, useEffect) yordamida funksional komponentlarda state va lifecycle funksiyalarini boshqarishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "useState yordamida hisoblagich (counter) komponenti yarating.",
          },
          {
            type: "question",
            content: "useEffect qachon ishga tushadi?",
            answer:
              "Har bir renderdan so‘ng, agar dependency array bo‘lsa, faqat o‘zgarishlarda ishga tushadi.",
          },
        ],
        duration: "35 daqiqa",
      },
      {
        id: 6,
        title: "React Router bilan navigatsiya",
        type: "video",
        video: "https://www.youtube.com/watch?v=Law7wfdg_ls",
        text: "React Router yordamida ko‘p sahifali ilovalar yaratishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "2 ta sahifa (Home va About) yarating va ular o‘rtasida navigatsiya qiling.",
          },
          {
            type: "question",
            content: "Route komponenti qanday ishlaydi?",
            answer: "Route URL’ga mos keladigan komponentni render qiladi.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 7,
        title: "Redux bilan state boshqarish",
        type: "video",
        video: "https://www.youtube.com/watch?v=CVpUuw9XSjY",
        text: "Redux yordamida global state boshqarishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Redux store yarating va undan foydalanib hisoblagich (counter) ilovasini yangilang.",
          },
          {
            type: "question",
            content: "Redux’da reducer nima vazifani bajaradi?",
            answer:
              "Reducer state’ni o‘zgartirish uchun action’larni qayta ishlaydi.",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 8,
        title: "Kichik loyiha: Todo ilovasi",
        type: "video",
        video: "https://www.youtube.com/watch?v=hT3j87FMR6M",
        text: "React, Hooks va Redux yordamida kichik Todo ilovasi yaratamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Todo ilovasi yarating: vazifalar qo‘shish, o‘chirish va tugallangan deb belgilash imkoniyati bo‘lsin.",
          },
        ],
        duration: "50 daqiqa",
      },
    ],
  },

  // 2. JavaScript Asoslari
  {
    title: "JavaScript Asoslari",
    mainImg: js,
    url: "/courses/javascript",
    secondaryImg: js2,
    overview: {
      description:
        "Bu kursda JavaScript dasturlash tilining asoslarini o‘rganasiz. O‘zgaruvchilar, funksiyalar, shartli operatorlar va tsikllardan boshlab, oddiy loyihalar yaratishgacha bo‘lgan mavzularni qamrab olamiz.",
      totalDuration: "3 soat 30 daqiqa",
      level: "Boshlang‘ich daraja",
      targetAudience:
        "Dasturlashni endi boshlayotganlar, JavaScript o‘rganmoqchi bo‘lganlar",
      prerequisites: "Hech qanday oldindan bilim talab qilinmaydi",
    },
    awards: [
      {
        title: "Standart Paket",
        description: "Kurs videolari va vazifalarga kirish imkoniyati.",
        definition: "Standart",
        price: "$99",
      },
      {
        title: "Premium Paket",
        description: "Videolar, vazifalar va mentor bilan 1:1 sessiyalar.",
        definition: "Premium",
        price: "$149",
      },
      {
        title: "VIP Paket",
        description:
          "Barcha imkoniyatlar + loyiha bo‘yicha qo‘llab-quvvatlash.",
        definition: "VIP",
        price: "$199",
      },
    ],
    lessons: [
      {
        id: 1,
        title: "JavaScript bilan tanishuv",
        type: "video",
        video: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        text: "JavaScript - bu veb-dasturlashda eng ko‘p ishlatiladigan tillardan biri. Bu darsda JavaScriptning asosiy tushunchalari bilan tanishasiz.",
        tasks: [
          {
            type: "task",
            content:
              "O‘zgaruvchi e’lon qiling va unga 'Salom, JavaScript!' qiymatini bering, so‘ng uni konsolga chiqaring.",
          },
        ],
        duration: "15 daqiqa",
      },
      {
        id: 2,
        title: "O‘zgaruvchilar va ma’lumot turlari",
        type: "video",
        video: "https://www.youtube.com/watch?v=9kRgVxULbag",
        text: "JavaScriptda o‘zgaruvchilar (let, const, var) va ma’lumot turlari (string, number, boolean) haqida o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "3 ta o‘zgaruvchi yarating: ism (string), yosh (number), talabami (boolean) va ularni konsolga chiqaring.",
          },
          {
            type: "question",
            content: "let va const o‘rtasidagi farq nima?",
            answer:
              "let o‘zgaruvchining qiymatini o‘zgartirishga ruxsat beradi, const esa o‘zgartirib bo‘lmaydi.",
          },
        ],
        duration: "20 daqiqa",
      },
      {
        id: 3,
        title: "Shartli operatorlar",
        type: "video",
        video: "https://www.youtube.com/watch?v=IsG4i5j0mAo",
        text: "if, else if, else yordamida shartli mantiqni qanday qo‘llashni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Yoshga qarab (18dan katta yoki kichik) foydalanuvchi voyaga yetgan yoki yetmaganligini aniqlovchi if-else yozing.",
          },
        ],
        duration: "25 daqiqa",
      },
      {
        id: 4,
        title: "Tsikllar",
        type: "video",
        video: "https://www.youtube.com/watch?v=s9wW2PpJ_U4",
        text: "for va while tsikllari yordamida takrorlanadigan jarayonlarni qanday boshqarishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "1dan 10gacha bo‘lgan sonlarni for tsikli yordamida konsolga chiqaring.",
          },
        ],
        duration: "25 daqiqa",
      },
      {
        id: 5,
        title: "Funksiyalar",
        type: "video",
        video: "https://www.youtube.com/watch?v=xUI5Tsl2JpY",
        text: "Funksiyalar yordamida kodni qayta ishlatish va modullashtirishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Ikki sonni qo‘shadigan funksiya yozing va uni chaqirib natijani konsolga chiqaring.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 6,
        title: "Massivlar bilan ishlash",
        type: "video",
        video: "https://www.youtube.com/watch?v=7Wkfz0qFxTA",
        text: "Massivlar yordamida bir nechta ma’lumotlarni saqlash va ularga ishlov berishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "5 ta meva nomidan iborat massiv yarating va uni forEach yordamida konsolga chiqaring.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 7,
        title: "Kichik loyiha: Kalkulyator",
        type: "video",
        video: "https://www.youtube.com/watch?v=j59qQ7YWLxw",
        text: "JavaScript yordamida oddiy kalkulyator loyihasini yaratamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Ikki sonni qo‘shish, ayirish, ko‘paytirish va bo‘lish imkoniyati bo‘lgan kalkulyator funksiyasi yozing.",
          },
        ],
        duration: "45 daqiqa",
      },
    ],
  },

  // 3. Node.js va Backend Dasturlash
  {
    title: "Node.js va Backend",
    mainImg: node,
    url: "/courses/nodejs",
    secondaryImg: node2,
    overview: {
      description:
        "Bu kursda Node.js yordamida backend dasturlashni o‘rganasiz. Server yaratish, API qurish va ma’lumotlar bazasi bilan ishlashni o‘rganamiz.",
      totalDuration: "5 soat",
      level: "O‘rta daraja",
      targetAudience:
        "Backend dasturlashni o‘rganmoqchi bo‘lganlar, Node.js bilan tanishmoqchi bo‘lganlar",
      prerequisites: "JavaScript asoslari",
    },
    awards: [
      {
        title: "Standart Paket",
        description: "Kurs videolari va vazifalarga kirish imkoniyati.",
        definition: "Standart",
        price: "$129",
      },
      {
        title: "Premium Paket",
        description: "Videolar, vazifalar va mentor bilan 1:1 sessiyalar.",
        definition: "Premium",
        price: "$199",
      },
      {
        title: "VIP Paket",
        description:
          "Barcha imkoniyatlar + loyiha bo‘yicha qo‘llab-quvvatlash.",
        definition: "VIP",
        price: "$299",
      },
    ],
    lessons: [
      {
        id: 1,
        title: "Node.js bilan tanishuv",
        type: "video",
        video: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
        text: "Node.js - bu JavaScriptni server tomonida ishlatish imkonini beruvchi muhit. Bu darsda Node.js bilan tanishamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Node.js yordamida oddiy server yarating va 'Salom, Node.js!' xabarini chiqaring.",
          },
        ],
        duration: "20 daqiqa",
      },
      {
        id: 2,
        title: "Express.js bilan ishlash",
        type: "video",
        video: "https://www.youtube.com/watch?v=SccSCuHhOw0",
        text: "Express.js yordamida server yaratish va oddiy API qurishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Express.js yordamida GET so‘roviga javob qaytaradigan oddiy API yarating.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 3,
        title: "Ma’lumotlar bazasi bilan ishlash (MongoDB)",
        type: "video",
        video: "https://www.youtube.com/watch?v=ofme2o29ngU",
        text: "MongoDB bilan ulanish va ma’lumotlarni saqlashni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "MongoDB’ga ulaning va oddiy foydalanuvchi ma’lumotlarini saqlang.",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 4,
        title: "REST API qurish",
        type: "video",
        video: "https://www.youtube.com/watch?v=pKd0Rpw7OGE",
        text: "REST API qurish va CRUD operatsiyalarini amalga oshirishni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Foydalanuvchilar uchun CRUD (Create, Read, Update, Delete) operatsiyalarini amalga oshiradigan API yarating.",
          },
        ],
        duration: "50 daqiqa",
      },
      {
        id: 5,
        title: "Autentifikatsiya va avtorizatsiya",
        type: "video",
        video: "https://www.youtube.com/watch?v=7nafaH9SddU",
        text: "JWT yordamida autentifikatsiya va avtorizatsiyani qanday qo‘llashni o‘rganamiz.",
        tasks: [
          {
            type: "task",
            content:
              "JWT yordamida foydalanuvchi login qilish tizimini yarating.",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 6,
        title: "Kichik loyiha: Blog API",
        type: "video",
        video: "https://www.youtube.com/watch?v=K5yccpCoa4I",
        text: "Node.js, Express.js va MongoDB yordamida blog API loyihasini yaratamiz.",
        tasks: [
          {
            type: "task",
            content:
              "Postlarni yaratish, o‘qish, yangilash va o‘chirish imkoniyati bo‘lgan blog API yarating.",
          },
        ],
        duration: "60 daqiqa",
      },
    ],
  },
];

export default CourseState;
