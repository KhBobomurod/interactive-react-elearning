// src/utils/codeChecker.js

// 1-dars: "Salom, Dunyo!" vazifasi
const checkLesson1 = (code, setResult) => {
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

// 2-dars: Props vazifasi
const checkLesson2 = (code, setResult) => {
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

// 3-dars: Komponentlar vazifasi
const checkLesson3 = (code, setResult) => {
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

// 4-dars: Lifecycle Methods
const checkLesson4 = (code, setResult) => {
  if (code.includes("componentDidMount") && code.includes("fetch")) {
    setResult("To‘g‘ri! API’dan ma’lumot olindi.");
  } else {
    setResult("Xato! Kodda componentDidMount va fetch ishlatilishi kerak.");
  }
};

// 5-dars: Hooks
const checkLesson5 = (code, setResult) => {
  if (
    code.includes("useState") &&
    (code.includes("setCount") || code.includes("setState"))
  ) {
    setResult("To‘g‘ri! Hisoblagich ishlaydi.");
  } else {
    setResult("Xato! Kodda useState va setCount/setState ishlatilishi kerak.");
  }
};

// 6-dars: React Router
const checkLesson6 = (code, setResult) => {
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

// 7-dars: Redux
const checkLesson7 = (code, setResult) => {
  if (code.includes("createStore") && code.includes("reducer")) {
    setResult("To‘g‘ri! Redux store yaratildi.");
  } else {
    setResult("Xato! Kodda createStore va reducer bo‘lishi kerak.");
  }
};

// 8-dars: Todo ilovasi
const checkLesson8 = (code, setResult) => {
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

// Umumiy tekshiruv funksiyasi
const checkCode = (taskContent, code, setResult) => {
  if (!code || code.trim() === "") {
    setResult("Iltimos, kod yozing.");
    return;
  }

  if (taskContent.includes("Salom, Dunyo!")) {
    checkLesson1(code, setResult);
  } else if (taskContent.includes("props orqali ismingizni yuboring")) {
    checkLesson2(code, setResult);
  } else if (taskContent.includes("Header, Main va Footer")) {
    checkLesson3(code, setResult);
  } else if (
    taskContent.includes("componentDidMount yordamida API’dan ma’lumot")
  ) {
    checkLesson4(code, setResult);
  } else if (taskContent.includes("useState yordamida hisoblagich")) {
    checkLesson5(code, setResult);
  } else if (taskContent.includes("2 ta sahifa (Home va About)")) {
    checkLesson6(code, setResult);
  } else if (taskContent.includes("Redux store yarating")) {
    checkLesson7(code, setResult);
  } else if (taskContent.includes("Todo ilovasi yarating")) {
    checkLesson8(code, setResult);
  } else {
    setResult("Xato! Tekshirib ko‘ring.");
  }
};

export default checkCode;
