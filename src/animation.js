// src/animation.js

// Sahifa animatsiyasi (umumiy sahifa yuklanishi uchun)
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 200, // Bir oz kamaytirdik, chunki 300 juda katta edi
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Bir oz uzaytirdik, yumshoqroq ko‘rinish uchun
      when: "beforeChildren",
      staggerChildren: 0.3, // Bolalarni biroz sekinroq paydo bo‘lishi uchun
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

// Sarlavhalar uchun animatsiya (AboutSection'dagi h2 uchun)
export const titleAnim = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Oddiy elementlar uchun fade animatsiyasi (matnlar, tugmalar uchun)
export const fade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Rasmlar uchun animatsiya
export const photoAnim = {
  hidden: { scale: 1.05, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// BenefitsSection'dagi kartalar uchun animatsiya
export const cardAnim = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// FaqSection'dagi toggle (ochilish/yopilish) animatsiyasi
export const toggleAnim = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Hover effekti uchun kichik animatsiya (masalan, BenefitsSection kartalari uchun)
export const hoverAnim = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
