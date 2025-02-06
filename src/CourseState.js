// import images
import react from "./img/react1.jpg";
import react2 from "./img/react2jpg.jpg";
import js from "./img/js1.png";
import js2 from "./img/js2.jpg";
import soon from "./img/soon1.jpg";
import soon2 from "./img/soon2.jpg";

export const CourseState = [
  {
    title: "Interaktiv React va Redux",
    mainImg: react,
    url: "/courses/react",
    secondaryImg: react2,
    awards: [
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "Standart",
        price: "$149",
      },
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "Premium",
        price: "$229",
      },
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "VIP",
        price: "$359",
      },
    ],
  },
  {
    title: "Tez kunda 😯",
    mainImg: soon,
    url: "/courses/soon",
    secondaryImg: soon2,

    awards: [
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "Standart",
        price: "$299",
      },
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "Premium",
        price: "$399",
      },
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "VIP",
        price: "$499",
      },
    ],
  },
  {
    title: "Interaktiv Javascript",
    mainImg: js,
    url: "/courses/js",
    secondaryImg: js2,
    awards: [
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "Standart",
        price: "$99",
      },
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "Premium",
        price: "$199",
      },
      {
        title: "Lorem, ipsum dolor.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex atque nulla quisquam esse perspiciatis!",
        definition: "VIP",
        price: "$279",
      },
    ],
  },
];

export default CourseState;
