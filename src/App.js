import React from "react";
// import pages
import AboutUs from "./pages/AboutUs";
// import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import CourseDetail from "./pages/CourseDetail";
import AdminPanel from "./pages/AdminPanel"; // Admin panelni import qilamiz
// React Router
import { Switch, Route, useLocation } from "react-router-dom";
// framer motion
import { AnimatePresence } from "framer-motion";
// CourseState import qilamiz
import { CourseState } from "./CourseState";

function App() {
  const location = useLocation();

  // Kurslar ro‘yxatini CourseState dan olamiz
  const courses = CourseState;

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/courses" exact>
            <Courses />
          </Route>
          {/* Har bir kurs uchun dinamik yo‘nalish qo‘shamiz */}
          {courses.map((course) => (
            <Route key={course.url} path={course.url} exact>
              <CourseDetail />
            </Route>
          ))}
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/dashboard-admin">
            <AdminPanel />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
