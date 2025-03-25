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

// Node.js kursi uchun tekshiruvlar
const checkNodeLesson1 = (code, setResult) => {
  if (code.includes("http.createServer") && code.includes("Salom, Node.js!")) {
    setResult("To‘g‘ri! Server ishlaydi.");
  } else {
    setResult(
      "Xato! Kodda http.createServer va 'Salom, Node.js!' bo‘lishi kerak."
    );
  }
};

const checkNodeLesson2 = (code, setResult) => {
  if (code.includes("express") && code.includes("app.get")) {
    setResult("To‘g‘ri! API ishlaydi.");
  } else {
    setResult("Xato! Kodda express va app.get bo‘lishi kerak.");
  }
};

const checkNodeLesson3 = (code, setResult) => {
  if (code.includes("mongoose") && code.includes("connect")) {
    setResult("To‘g‘ri! MongoDB’ga ulanish muvaffaqiyatli.");
  } else {
    setResult("Xato! Kodda mongoose va connect bo‘lishi kerak.");
  }
};

const checkNodeLesson4 = (code, setResult) => {
  if (
    code.includes("app.get") &&
    code.includes("app.post") &&
    code.includes("app.put") &&
    code.includes("app.delete")
  ) {
    setResult("To‘g‘ri! CRUD operatsiyalari ishlaydi.");
  } else {
    setResult(
      "Xato! Kodda app.get, app.post, app.put va app.delete bo‘lishi kerak."
    );
  }
};

const checkNodeLesson5 = (code, setResult) => {
  if (code.includes("jsonwebtoken") && code.includes("jwt.sign")) {
    setResult("To‘g‘ri! JWT autentifikatsiyasi ishlaydi.");
  } else {
    setResult("Xato! Kodda jsonwebtoken va jwt.sign bo‘lishi kerak.");
  }
};

const checkNodeLesson6 = (code, setResult) => {
  if (
    code.includes("app.post") &&
    code.includes("app.get") &&
    code.includes("app.put") &&
    code.includes("app.delete")
  ) {
    setResult("To‘g‘ri! Blog API ishlaydi.");
  } else {
    setResult(
      "Xato! Kodda app.post, app.get, app.put va app.delete bo‘lishi kerak."
    );
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
  // Node.js kursi
  else if (taskContent.includes("Node.js yordamida oddiy server yarating")) {
    checkNodeLesson1(code, setResult);
  } else if (taskContent.includes("Express.js yordamida GET so‘roviga javob")) {
    checkNodeLesson2(code, setResult);
  } else if (taskContent.includes("MongoDB’ga ulaning")) {
    checkNodeLesson3(code, setResult);
  } else if (taskContent.includes("Foydalanuvchilar uchun CRUD")) {
    checkNodeLesson4(code, setResult);
  } else if (taskContent.includes("JWT yordamida foydalanuvchi login")) {
    checkNodeLesson5(code, setResult);
  } else if (
    taskContent.includes("Postlarni yaratish, o‘qish, yangilash va o‘chirish")
  ) {
    checkNodeLesson6(code, setResult);
  } else {
    setResult("Xato! Tekshirib ko‘ring.");
  }
};

export default checkCode;
