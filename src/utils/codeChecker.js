// src/utils/codeChecker.js

// React kursi uchun tekshiruvlar
const checkReactLesson1 = (code, setResult) => {
  if (code.includes("Salom Dunyo")) {
    if (
      code.includes("ReactDOM.render") &&
      code.includes("React.createElement")
    ) {
      setResult("To‘g‘ri! Kod ishlaydi.");
    } else {
      setResult(
        "Xato! Kodda ReactDOM.render yoki React.createElement ishlatilishi kerak."
      );
    }
  } else {
    setResult("Xato! Kodda 'Salom Dunyo' so‘zi bo‘lishi kerak.");
  }
};

const checkReactLesson2 = (code, setResult) => {
  if (code.includes("props")) {
    if (code.includes("function") || code.includes("const")) {
      setResult("To‘g‘ri! Props ishlatildi.");
    } else {
      setResult("Xato! Komponent funksional yoki class bo‘lishi kerak.");
    }
  } else {
    setResult("Xato! Kodda 'props' ishlatilishi kerak.");
  }
};

const checkReactLesson3 = (code, setResult) => {
  if (
    code.includes("Header") &&
    code.includes("Main") &&
    code.includes("Footer")
  ) {
    setResult("To‘g‘ri! Barcha komponentlar yaratildi.");
  } else {
    setResult(
      "Xato! Kodda Header, Main va Footer komponentlari bo‘lishi kerak."
    );
  }
};

const checkReactLesson4 = (code, setResult) => {
  if (code.includes("componentDidMount") && code.includes("fetch")) {
    setResult("To‘g‘ri! API’dan ma’lumot olindi.");
  } else {
    setResult("Xato! Kodda componentDidMount va fetch ishlatilishi kerak.");
  }
};

const checkReactLesson5 = (code, setResult) => {
  if (
    code.includes("useState") &&
    (code.includes("setCount") || code.includes("setState"))
  ) {
    setResult("To‘g‘ri! Hisoblagich ishlaydi.");
  } else {
    setResult("Xato! Kodda useState va setCount/setState ishlatilishi kerak.");
  }
};

const checkReactLesson6 = (code, setResult) => {
  if (
    code.includes("Route") &&
    code.includes("Home") &&
    code.includes("About")
  ) {
    setResult("To‘g‘ri! Navigatsiya ishlaydi.");
  } else {
    setResult("Xato! Kodda Route, Home va About bo‘lishi kerak.");
  }
};

const checkReactLesson7 = (code, setResult) => {
  if (code.includes("createStore") && code.includes("reducer")) {
    setResult("To‘g‘ri! Redux store yaratildi.");
  } else {
    setResult("Xato! Kodda createStore va reducer bo‘lishi kerak.");
  }
};

const checkReactLesson8 = (code, setResult) => {
  if (
    code.includes("useState") &&
    code.includes("addTodo") &&
    code.includes("removeTodo")
  ) {
    setResult("To‘g‘ri! Todo ilovasi ishlaydi.");
  } else {
    setResult("Xato! Kodda useState, addTodo va removeTodo bo‘lishi kerak.");
  }
};

// JavaScript kursi uchun tekshiruvlar
const checkJSLesson1 = (code, setResult) => {
  if (code.includes("Salom, JavaScript!") && code.includes("console.log")) {
    setResult("To‘g‘ri! O‘zgaruvchi konsolga chiqarildi.");
  } else {
    setResult(
      "Xato! Kodda 'Salom, JavaScript!' va console.log bo‘lishi kerak."
    );
  }
};

const checkJSLesson2 = (code, setResult) => {
  if (
    code.includes("let") &&
    code.includes("const") &&
    code.includes("console.log") &&
    code.match(/['"].*['"]/g) && // String
    code.match(/\d+/) && // Number
    code.match(/(true|false)/) // Boolean
  ) {
    setResult("To‘g‘ri! O‘zgaruvchilar to‘g‘ri e’lon qilindi.");
  } else {
    setResult(
      "Xato! Kodda ism (string), yosh (number), talabami (boolean) va console.log bo‘lishi kerak."
    );
  }
};

const checkJSLesson3 = (code, setResult) => {
  if (code.includes("if") && code.includes("else") && code.includes(">")) {
    setResult("To‘g‘ri! Shartli operator ishlaydi.");
  } else {
    setResult(
      "Xato! Kodda if, else va yoshni solishtirish (>18) bo‘lishi kerak."
    );
  }
};

const checkJSLesson4 = (code, setResult) => {
  if (code.includes("for") && code.includes("console.log")) {
    setResult("To‘g‘ri! Tsikl ishlaydi.");
  } else {
    setResult("Xato! Kodda for tsikli va console.log bo‘lishi kerak.");
  }
};

const checkJSLesson5 = (code, setResult) => {
  if (
    code.includes("function") &&
    code.includes("return") &&
    code.includes("+")
  ) {
    setResult("To‘g‘ri! Funksiya ishlaydi.");
  } else {
    setResult("Xato! Kodda function, return va + operatori bo‘lishi kerak.");
  }
};

const checkJSLesson6 = (code, setResult) => {
  if (code.includes("forEach") && code.includes("console.log")) {
    setResult("To‘g‘ri! Massiv elementlari chiqarildi.");
  } else {
    setResult("Xato! Kodda forEach va console.log bo‘lishi kerak.");
  }
};

const checkJSLesson7 = (code, setResult) => {
  if (
    code.includes("function") &&
    code.includes("+") &&
    code.includes("-") &&
    code.includes("*") &&
    code.includes("/")
  ) {
    setResult("To‘g‘ri! Kalkulyator ishlaydi.");
  } else {
    setResult("Xato! Kodda +, -, *, / operatorlari bo‘lishi kerak.");
  }
};

// Data Science with Python kursi uchun tekshiruvlar
const checkDataScienceLesson1 = (code, setResult) => {
  if (code.includes("print")) {
    setResult("To‘g‘ri! Python skripti ishlaydi.");
  } else {
    setResult("Xato! Kodda print funksiyasi bo‘lishi kerak.");
  }
};

const checkDataScienceLesson2 = (code, setResult) => {
  if (code.includes("pandas") && code.includes("read_csv")) {
    setResult("To‘g‘ri! CSV fayl o‘qildi.");
  } else {
    setResult("Xato! Kodda pandas va read_csv bo‘lishi kerak.");
  }
};

const checkDataScienceLesson3 = (code, setResult) => {
  if (code.includes("matplotlib") && code.includes("plot")) {
    setResult("To‘g‘ri! Grafik chizildi.");
  } else {
    setResult("Xato! Kodda matplotlib va plot bo‘lishi kerak.");
  }
};

const checkDataScienceLesson4 = (code, setResult) => {
  if (code.includes("sklearn") && code.includes("LinearRegression")) {
    setResult("To‘g‘ri! Regressiya modeli yaratildi.");
  } else {
    setResult("Xato! Kodda sklearn va LinearRegression bo‘lishi kerak.");
  }
};

const checkDataScienceLesson5 = (code, setResult) => {
  if (code.includes("predict")) {
    setResult("To‘g‘ri! Bashorat qilindi.");
  } else {
    setResult("Xato! Kodda predict funksiyasi bo‘lishi kerak.");
  }
};

// UI/UX Design Fundamentals kursi uchun tekshiruvlar (kod yo‘q, faqat dizayn vazifalari)
const checkUIUXLesson1 = (code, setResult) => {
  setResult("Dizayn vazifasi: Eskizni tekshirish uchun o‘qituvchiga yuboring.");
};

const checkUIUXLesson2 = (code, setResult) => {
  setResult("Dizayn vazifasi: Figma loyihasini o‘qituvchiga yuboring.");
};

const checkUIUXLesson3 = (code, setResult) => {
  setResult("Dizayn vazifasi: Adobe XD prototipini o‘qituvchiga yuboring.");
};

const checkUIUXLesson5 = (code, setResult) => {
  setResult("Dizayn vazifasi: Mobil ilova dizaynini o‘qituvchiga yuboring.");
};

// Cybersecurity Basics kursi uchun tekshiruvlar
const checkCybersecurityLesson2 = (code, setResult) => {
  setResult(
    "Tahlil vazifasi: Tarmoq konfiguratsiyasini o‘qituvchiga yuboring."
  );
};

const checkCybersecurityLesson3 = (code, setResult) => {
  if (code.includes("encrypt")) {
    setResult("To‘g‘ri! Shifrlash algoritmi ishlatildi.");
  } else {
    setResult("Xato! Kodda shifrlash algoritmi bo‘lishi kerak.");
  }
};

const checkCybersecurityLesson5 = (code, setResult) => {
  setResult("Tahlil vazifasi: Zaifliklarni o‘qituvchiga yuboring.");
};

// Mobile App Development with Flutter kursi uchun tekshiruvlar
const checkFlutterLesson1 = (code, setResult) => {
  if (code.includes("flutter")) {
    setResult("To‘g‘ri! Flutter loyihasi sozlandi.");
  } else {
    setResult("Xato! Kodda Flutter sozlamalari bo‘lishi kerak.");
  }
};

const checkFlutterLesson2 = (code, setResult) => {
  if (code.includes("void") && code.includes("print")) {
    setResult("To‘g‘ri! Dart funksiyasi yozildi.");
  } else {
    setResult("Xato! Kodda Dart funksiyasi bo‘lishi kerak.");
  }
};

const checkFlutterLesson3 = (code, setResult) => {
  if (code.includes("Scaffold") && code.includes("AppBar")) {
    setResult("To‘g‘ri! Mobil sahifa dizayni yaratildi.");
  } else {
    setResult("Xato! Kodda Scaffold va AppBar bo‘lishi kerak.");
  }
};

const checkFlutterLesson4 = (code, setResult) => {
  if (code.includes("setState")) {
    setResult("To‘g‘ri! Hisoblagich ilovasi ishlaydi.");
  } else {
    setResult("Xato! Kodda setState bo‘lishi kerak.");
  }
};

const checkFlutterLesson5 = (code, setResult) => {
  if (
    code.includes("List") &&
    code.includes("add") &&
    code.includes("remove")
  ) {
    setResult("To‘g‘ri! Todo ilovasi ishlaydi.");
  } else {
    setResult("Xato! Kodda List, add va remove bo‘lishi kerak.");
  }
};

// Blockchain & Cryptocurrency Basics kursi uchun tekshiruvlar
const checkBlockchainLesson2 = (code, setResult) => {
  setResult("Tahlil vazifasi: Bitcoin tranzaksiyasini o‘qituvchiga yuboring.");
};

const checkBlockchainLesson3 = (code, setResult) => {
  if (code.includes("contract")) {
    setResult("To‘g‘ri! Smart kontrakt yozildi.");
  } else {
    setResult("Xato! Kodda smart kontrakt bo‘lishi kerak.");
  }
};

const checkBlockchainLesson4 = (code, setResult) => {
  if (code.includes("web3")) {
    setResult("To‘g‘ri! DApp loyihasi yaratildi.");
  } else {
    setResult("Xato! Kodda web3 bo‘lishi kerak.");
  }
};

const checkBlockchainLesson5 = (code, setResult) => {
  if (code.includes("ERC20")) {
    setResult("To‘g‘ri! ERC-20 tokeni yaratildi.");
  } else {
    setResult("Xato! Kodda ERC20 bo‘lishi kerak.");
  }
};

// Umumiy tekshiruv funksiyasi
const checkCode = (taskContent, code, setResult) => {
  if (!code || code.trim() === "") {
    setResult("Iltimos, kod yozing.");
    return;
  }

  // React kursi
  if (taskContent.includes("Salom, Dunyo!")) {
    checkReactLesson1(code, setResult);
  } else if (taskContent.includes("props orqali ismingizni yuboring")) {
    checkReactLesson2(code, setResult);
  } else if (taskContent.includes("Header, Main va Footer")) {
    checkReactLesson3(code, setResult);
  } else if (
    taskContent.includes("componentDidMount yordamida API’dan ma’lumot")
  ) {
    checkReactLesson4(code, setResult);
  } else if (taskContent.includes("useState yordamida hisoblagich")) {
    checkReactLesson5(code, setResult);
  } else if (taskContent.includes("2 ta sahifa (Home va About)")) {
    checkReactLesson6(code, setResult);
  } else if (taskContent.includes("Redux store yarating")) {
    checkReactLesson7(code, setResult);
  } else if (taskContent.includes("Todo ilovasi yarating")) {
    checkReactLesson8(code, setResult);
  }
  // JavaScript kursi
  else if (
    taskContent.includes(
      "O‘zgaruvchi e’lon qiling va unga 'Salom, JavaScript!'"
    )
  ) {
    checkJSLesson1(code, setResult);
  } else if (
    taskContent.includes(
      "3 ta o‘zgaruvchi yarating: ism (string), yosh (number), talabami (boolean)"
    )
  ) {
    checkJSLesson2(code, setResult);
  } else if (taskContent.includes("Yoshga qarab (18dan katta yoki kichik)")) {
    checkJSLesson3(code, setResult);
  } else if (taskContent.includes("1dan 10gacha bo‘lgan sonlarni for tsikli")) {
    checkJSLesson4(code, setResult);
  } else if (taskContent.includes("Ikki sonni qo‘shadigan funksiya")) {
    checkJSLesson5(code, setResult);
  } else if (taskContent.includes("5 ta meva nomidan iborat massiv")) {
    checkJSLesson6(code, setResult);
  } else if (
    taskContent.includes(
      "Ikki sonni qo‘shish, ayirish, ko‘paytirish va bo‘lish"
    )
  ) {
    checkJSLesson7(code, setResult);
  }
  // Data Science with Python kursi
  else if (taskContent.includes("Oddiy Python skriptini yozing")) {
    checkDataScienceLesson1(code, setResult);
  } else if (taskContent.includes("CSV fayldan ma’lumot o‘qing")) {
    checkDataScienceLesson2(code, setResult);
  } else if (taskContent.includes("Sodda grafik chizing")) {
    checkDataScienceLesson3(code, setResult);
  } else if (taskContent.includes("Oddiy regressiya modelini yarating")) {
    checkDataScienceLesson4(code, setResult);
  } else if (
    taskContent.includes("Ma’lumotlarni tahlil qilib, bashorat qiling")
  ) {
    checkDataScienceLesson5(code, setResult);
  }
  // UI/UX Design Fundamentals kursi
  else if (taskContent.includes("Oddiy interfeys eskizini chizing")) {
    checkUIUXLesson1(code, setResult);
  } else if (taskContent.includes("Figma’da sodda sahifa dizaynini yarating")) {
    checkUIUXLesson2(code, setResult);
  } else if (
    taskContent.includes("Adobe XD’da navigatsiya prototipini yarating")
  ) {
    checkUIUXLesson3(code, setResult);
  } else if (
    taskContent.includes("Mobil ilova uchun dizayn loyihasini tayyorlang")
  ) {
    checkUIUXLesson5(code, setResult);
  }
  // Cybersecurity Basics kursi
  else if (
    taskContent.includes("Oddiy tarmoq konfiguratsiyasini tahlil qiling")
  ) {
    checkCybersecurityLesson2(code, setResult);
  } else if (
    taskContent.includes("Oddiy shifrlash algoritmini sinab ko‘ring")
  ) {
    checkCybersecurityLesson3(code, setResult);
  } else if (taskContent.includes("Tizimning zaif joylarini aniqlang")) {
    checkCybersecurityLesson5(code, setResult);
  }
  // Mobile App Development with Flutter kursi
  else if (taskContent.includes("Flutter loyihasini sozlang")) {
    checkFlutterLesson1(code, setResult);
  } else if (taskContent.includes("Oddiy Dart funksiyasini yozing")) {
    checkFlutterLesson2(code, setResult);
  } else if (taskContent.includes("Sodda mobil sahifa dizaynini yarating")) {
    checkFlutterLesson3(code, setResult);
  } else if (taskContent.includes("Hisoblagich ilovasini yarating")) {
    checkFlutterLesson4(code, setResult);
  } else if (
    taskContent.includes("Vazifalar qo‘shish va o‘chirish imkoniyati")
  ) {
    checkFlutterLesson5(code, setResult);
  }
  // Blockchain & Cryptocurrency Basics kursi
  else if (taskContent.includes("Bitcoin tranzaksiyasini tahlil qiling")) {
    checkBlockchainLesson2(code, setResult);
  } else if (taskContent.includes("Oddiy smart kontrakt yozing")) {
    checkBlockchainLesson3(code, setResult);
  } else if (taskContent.includes("Sodda DApp loyihasini yarating")) {
    checkBlockchainLesson4(code, setResult);
  } else if (taskContent.includes("ERC-20 tokenini yarating")) {
    checkBlockchainLesson5(code, setResult);
  } else {
    setResult("Bu vazifa uchun avtomatik tekshiruv mavjud emas.");
  }
};

export default checkCode;
