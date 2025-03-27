// src/CourseState.js
import react from "./img/react1.jpg";
import react2 from "./img/react2jpg.jpg";
import js from "./img/js.png";
import js2 from "./img/js2.jpg";
import flutter from "./img/flutter.jpg";
import blockchain from "./img/blockchain.jpg";
import python from "./img/data-science.jpg";
import uiux from "./img/uiux.jpg";
import cybersecurity from "./img/cybersecurity.jpg";

export const CourseState = [
  // 1. Interaktiv React va Redux
  {
    title: "React va Redux",
    mainImg: react,
    url: "/react", // "/courses/react" dan "/react" ga o‘zgartirildi
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
    url: "/javascript", // "/courses/javascript" dan "/javascript" ga o‘zgartirildi
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

  // 3. Data Science with Python
  {
    title: "Data Science with Python",
    mainImg: python,
    url: "/data-science", // "/courses/data-science-python" dan "/data-science" ga o‘zgartirildi
    secondaryImg: python,
    overview: {
      description:
        "Python yordamida ma’lumotlarni tahlil qilish, vizualizatsiya qilish va machine learning modellarini yaratishni o‘rganing.",
      totalDuration: "7 soat",
      level: "Boshlang‘ich va o‘rta daraja",
      targetAudience: "Ma’lumotlar tahlilchilari va AI/ML bilan qiziqqanlar",
      prerequisites: "Python asoslari",
    },
    awards: [
      {
        title: "Standart Paket",
        description: "Kurs videolari va vazifalarga kirish imkoniyati.",
        definition: "Standart",
        price: "$169",
      },
      {
        title: "Premium Paket",
        description: "Videolar, vazifalar va mentor bilan 1:1 sessiyalar.",
        definition: "Premium",
        price: "$259",
      },
      {
        title: "VIP Paket",
        description:
          "Barcha imkoniyatlar + loyiha bo‘yicha qo‘llab-quvvatlash.",
        definition: "VIP",
        price: "$429",
      },
    ],
    lessons: [
      {
        id: 1,
        title: "Python bilan tanishuv",
        type: "video",
        video: "https://www.youtube.com/watch?v=rfscVS0vtbw",
        text: "Data Science uchun Python asoslari.",
        tasks: [
          {
            type: "task",
            content: "Oddiy Python skriptini yozing.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 2,
        title: "Pandas bilan ma’lumot tahlili",
        type: "video",
        video: "https://www.youtube.com/watch?v=vmEHCJofslg",
        text: "Pandas kutubxonasi bilan ishlash.",
        tasks: [
          {
            type: "task",
            content: "CSV fayldan ma’lumot o‘qing va tahlil qiling.",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 3,
        title: "Ma’lumotlar vizualizatsiyasi",
        type: "video",
        video: "https://www.youtube.com/watch?v=a9UrKTVEeZA",
        text: "Matplotlib va Seaborn bilan grafiklar.",
        tasks: [
          {
            type: "task",
            content: "Sodda grafik chizing.",
          },
        ],
        duration: "45 daqiqa",
      },
      {
        id: 4,
        title: "Machine Learning asoslari",
        type: "video",
        video: "https://www.youtube.com/watch?v=GwZoGJyTTR4",
        text: "Scikit-learn bilan ML modellari.",
        tasks: [
          {
            type: "task",
            content: "Oddiy regressiya modelini yarating.",
          },
        ],
        duration: "50 daqiqa",
      },
      {
        id: 5,
        title: "Loyiha: Ma’lumot tahlili",
        type: "video",
        video: "https://www.youtube.com/watch?v=0xWf7cPWRg",
        text: "Real loyiha orqali bilimlarni mustahkamlash.",
        tasks: [
          {
            type: "task",
            content: "Ma’lumotlarni tahlil qilib, bashorat qiling.",
          },
        ],
        duration: "60 daqiqa",
      },
    ],
  },

  // 4. UI/UX Design Fundamentals
  {
    title: "UI/UX Design Fundamentals",
    mainImg: uiux,
    url: "/ui-ux", // "/courses/uiux" dan "/ui-ux" ga o‘zgartirildi
    secondaryImg: uiux,
    overview: {
      description:
        "Foydalanuvchi interfeysi va tajribasini loyihalash asoslarini o‘rganing. Figma va Adobe XD kabi vositalardan foydalanishni o‘z ichiga oladi.",
      totalDuration: "4 soat 30 daqiqa",
      level: "Boshlang‘ich daraja",
      targetAudience: "Dizaynerlar va mahsulot ishlab chiqaruvchilar",
      prerequisites: "Hech qanday bilim talab qilinmaydi",
    },
    awards: [
      {
        title: "Standart Paket",
        description: "Kurs videolari va vazifalarga kirish imkoniyati.",
        definition: "Standart",
        price: "$119",
      },
      {
        title: "Premium Paket",
        description: "Videolar, vazifalar va mentor bilan 1:1 sessiyalar.",
        definition: "Premium",
        price: "$189",
      },
      {
        title: "VIP Paket",
        description:
          "Barcha imkoniyatlar + loyiha bo‘yicha qo‘llab-quvvatlash.",
        definition: "VIP",
        price: "$279",
      },
    ],
    lessons: [
      {
        id: 1,
        title: "UI/UX asoslari",
        type: "video",
        video: "https://www.youtube.com/watch?v=0e0pqUNtWno",
        text: "UI va UX o‘rtasidagi farqlar.",
        tasks: [
          {
            type: "task",
            content: "Oddiy interfeys eskizini chizing.",
          },
        ],
        duration: "20 daqiqa",
      },
      {
        id: 2,
        title: "Figma bilan ishlash",
        type: "video",
        video: "https://www.youtube.com/watch?v=FTFaQWZB6aA",
        text: "Figma vositasida dizayn yaratish.",
        tasks: [
          {
            type: "task",
            content: "Figma’da sodda sahifa dizaynini yarating.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 3,
        title: "Adobe XD asoslari",
        type: "video",
        video: "https://www.youtube.com/watch?v=9xMgv5RCEtQ",
        text: "Adobe XD bilan interaktiv prototiplar.",
        tasks: [
          {
            type: "task",
            content: "Adobe XD’da navigatsiya prototipini yarating.",
          },
        ],
        duration: "35 daqiqa",
      },
      {
        id: 4,
        title: "Foydalanuvchi tajribasi",
        type: "video",
        video: "https://www.youtube.com/watch?v=5X8XGYsYKLg",
        text: "UX tadqiqotlari va testlari.",
        tasks: [
          {
            type: "question",
            content: "UX tadqiqotining asosiy maqsadi nima?",
            answer: "Foydalanuvchi ehtiyojlarini aniqlash",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 5,
        title: "Loyiha: Mobil ilova dizayni",
        type: "video",
        video: "https://www.youtube.com/watch?v=zvQSKDDSB1M",
        text: "Mobil ilova uchun UI/UX dizaynini yarating.",
        tasks: [
          {
            type: "task",
            content: "Mobil ilova uchun dizayn loyihasini tayyorlang.",
          },
        ],
        duration: "45 daqiqa",
      },
    ],
  },

  // 5. Cybersecurity Basics
  {
    title: "Cybersecurity Basics",
    mainImg: cybersecurity,
    url: "/cybersecurity", // "/courses/cybersecurity" dan "/cybersecurity" ga o‘zgartirildi
    secondaryImg: cybersecurity,
    overview: {
      description:
        "Kiberxavfsizlik asoslarini o‘rganing: tarmoq xavfsizligi, shifrlash va hujumlardan himoyalanish usullari.",
      totalDuration: "5 soat",
      level: "Boshlang‘ich daraja",
      targetAudience: "IT mutaxassislari va xavfsizlik bilan qiziqqanlar",
      prerequisites: "Kompyuter asoslari",
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
        title: "Kiberxavfsizlikka kirish",
        type: "video",
        video: "https://www.youtube.com/watch?v=INg6kJ6YQ7w",
        text: "Kiberxavfsizlik nima va nima uchun muhim?",
        tasks: [
          {
            type: "question",
            content: "Kiberxavfsizlikning asosiy maqsadi nima?",
            answer: "Ma’lumotlarni himoyalash",
          },
        ],
        duration: "25 daqiqa",
      },
      {
        id: 2,
        title: "Tarmoq xavfsizligi",
        type: "video",
        video: "https://www.youtube.com/watch?v=8pO8S6MgmQ0",
        text: "Tarmoqlarni himoyalash usullari.",
        tasks: [
          {
            type: "task",
            content: "Oddiy tarmoq konfiguratsiyasini tahlil qiling.",
          },
        ],
        duration: "35 daqiqa",
      },
      {
        id: 3,
        title: "Shifrlash asoslari",
        type: "video",
        video: "https://www.youtube.com/watch?v=AQDCe585Lfc",
        text: "Ma’lumotlarni shifrlash qanday ishlaydi?",
        tasks: [
          {
            type: "task",
            content: "Oddiy shifrlash algoritmini sinab ko‘ring.",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 4,
        title: "Hujumlardan himoyalanish",
        type: "video",
        video: "https://www.youtube.com/watch?v=0S2oNxW5oZA",
        text: "Umumiy kiberhujum turlari va ulardan himoyalanish.",
        tasks: [
          {
            type: "question",
            content: "Phishing hujumi nima?",
            answer: "Foydalanuvchilarni aldash orqali ma’lumot olish",
          },
        ],
        duration: "45 daqiqa",
      },
      {
        id: 5,
        title: "Loyiha: Xavfsizlik auditi",
        type: "video",
        video: "https://www.youtube.com/watch?v=zvQSKDDSB1M",
        text: "Oddiy tizim uchun xavfsizlik auditi.",
        tasks: [
          {
            type: "task",
            content: "Tizimning zaif joylarini aniqlang.",
          },
        ],
        duration: "50 daqiqa",
      },
    ],
  },

  // 6. Mobile App Development with Flutter
  {
    title: "Mobile App Development with Flutter",
    mainImg: flutter,
    url: "/flutter", // "/courses/flutter" dan "/flutter" ga o‘zgartirildi
    secondaryImg: flutter,
    overview: {
      description:
        "Flutter yordamida iOS va Android uchun mobil ilovalarni yaratishni o‘rganing.",
      totalDuration: "6 soat",
      level: "Boshlang‘ich va o‘rta daraja",
      targetAudience: "Mobil dasturchilar va startaplar",
      prerequisites: "Dart yoki boshqa dasturlash tili asoslari",
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
        price: "$349",
      },
    ],
    lessons: [
      {
        id: 1,
        title: "Flutter bilan tanishuv",
        type: "video",
        video: "https://www.youtube.com/watch?v=fq4N0hgOWzU",
        text: "Flutter nima va qanday ishlaydi?",
        tasks: [
          {
            type: "task",
            content: "Flutter loyihasini sozlang.",
          },
        ],
        duration: "25 daqiqa",
      },
      {
        id: 2,
        title: "Dart asoslari",
        type: "video",
        video: "https://www.youtube.com/watch?v=EPs6YNKqG8g",
        text: "Flutter uchun Dart tili bilan tanishuv.",
        tasks: [
          {
            type: "task",
            content: "Oddiy Dart funksiyasini yozing.",
          },
        ],
        duration: "30 daqiqa",
      },
      {
        id: 3,
        title: "UI dizayn Flutter’da",
        type: "video",
        video: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
        text: "Flutter’da interfeys yaratish.",
        tasks: [
          {
            type: "task",
            content: "Sodda mobil sahifa dizaynini yarating.",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 4,
        title: "State boshqaruvi",
        type: "video",
        video: "https://www.youtube.com/watch?v=zK2ZQpDgbYk",
        text: "Flutter’da holatni boshqarish.",
        tasks: [
          {
            type: "task",
            content: "Hisoblagich ilovasini yarating.",
          },
        ],
        duration: "45 daqiqa",
      },
      {
        id: 5,
        title: "Loyiha: Todo ilovasi",
        type: "video",
        video: "https://www.youtube.com/watch?v=E8jIudo4zX8",
        text: "Flutter’da Todo ilovasini yarating.",
        tasks: [
          {
            type: "task",
            content: "Vazifalar qo‘shish va o‘chirish imkoniyati qo‘shing.",
          },
        ],
        duration: "50 daqiqa",
      },
    ],
  },

  // 7. Blockchain & Cryptocurrency Basics
  {
    title: "Blockchain & Cryptocurrency Basics",
    mainImg: blockchain,
    url: "/blockchain", // "/courses/blockchain" dan "/blockchain" ga o‘zgartirildi
    secondaryImg: blockchain,
    overview: {
      description:
        "Blockchain texnologiyasi va kriptovalyutalar asoslarini o‘rganing. Smart kontraktlar va Ethereum bilan ishlashni o‘z ichiga oladi.",
      totalDuration: "5 soat 30 daqiqa",
      level: "Boshlang‘ich va o‘rta daraja",
      targetAudience: "Texnologiya va moliya sohasida qiziqqanlar",
      prerequisites: "Dasturlash asoslari (ixtiyoriy)",
    },
    awards: [
      {
        title: "Standart Paket",
        description: "Kurs videolari va vazifalarga kirish imkoniyati.",
        definition: "Standart",
        price: "$159",
      },
      {
        title: "Premium Paket",
        description: "Videolar, vazifalar va mentor bilan 1:1 sessiyalar.",
        definition: "Premium",
        price: "$239",
      },
      {
        title: "VIP Paket",
        description:
          "Barcha imkoniyatlar + loyiha bo‘yicha qo‘llab-quvvatlash.",
        definition: "VIP",
        price: "$369",
      },
    ],
    lessons: [
      {
        id: 1,
        title: "Blockchain asoslari",
        type: "video",
        video: "https://www.youtube.com/watch?v=SSo_EIwHSd4",
        text: "Blockchain nima va u qanday ishlaydi?",
        tasks: [
          {
            type: "question",
            content: "Blockchainning asosiy xususiyati nima?",
            answer: "Markazlashmaganlik",
          },
        ],
        duration: "25 daqiqa",
      },
      {
        id: 2,
        title: "Kriptovalyutalar",
        type: "video",
        video: "https://www.youtube.com/watch?v=Um63OQz3bjo",
        text: "Bitcoin va boshqa kriptovalyutalar haqida.",
        tasks: [
          {
            type: "task",
            content: "Bitcoin tranzaksiyasini tahlil qiling.",
          },
        ],
        duration: "35 daqiqa",
      },
      {
        id: 3,
        title: "Ethereum va Smart kontraktlar",
        type: "video",
        video: "https://www.youtube.com/watch?v=ZE2HxTmxfrI",
        text: "Smart kontraktlar bilan ishlash.",
        tasks: [
          {
            type: "task",
            content: "Oddiy smart kontrakt yozing.",
          },
        ],
        duration: "40 daqiqa",
      },
      {
        id: 4,
        title: "DApp yaratish",
        type: "video",
        video: "https://www.youtube.com/watch?v=coQ5dg8wM2o",
        text: "Decentralized ilovalar bilan tanishuv.",
        tasks: [
          {
            type: "task",
            content: "Sodda DApp loyihasini yarating.",
          },
        ],
        duration: "45 daqiqa",
      },
      {
        id: 5,
        title: "Loyiha: Token yaratish",
        type: "video",
        video: "https://www.youtube.com/watch?v=XdKbZpwL2ks",
        text: "Ethereum’da o‘z tokeningizni yarating.",
        tasks: [
          {
            type: "task",
            content: "ERC-20 tokenini yarating.",
          },
        ],
        duration: "50 daqiqa",
      },
    ],
  },
];

export default CourseState;
