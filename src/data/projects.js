import exerciseImg from "../assets/project1.jpg"
import todoImg from "../assets/project2.jpg"
import quizImg from "../assets/project3.jpg"

const projects = [
  {
    id: 1,
    title: "Exercise App",
    description: "A simple Exercise Tracker React Native app.",
    image: exerciseImg,
    link: "https://cjxymm.github.io/exercise-app-cv/"
  },
  {
    id: 2,
    title: "TO-DO List",
    description: "A simple React Native to-do list app with add, delete, and filter features.",
    image: todoImg,
    link: "https://cjxymm.github.io/todo05/"
  },
  {
    id: 3,
    title: "Quiz App",
    description: "A simple React Native quiz app with questions and answers based off Daredevil.",
    image: quizImg,
    link: "https://github.com/cjxymm/cv-quizapp"
  }
];

export default projects;