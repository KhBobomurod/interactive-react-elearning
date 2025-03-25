import React from "react";
// import pages
import AboutUs from "./pages/AbuotUs";
// import GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Courses from "./pages/Courses";
import ContactUS from "./pages/ContactUs";
import CourseDetail from "./pages/CourseDetail";
import AdminPanel from "./pages/AdminPanel"; // Admin panelni import qilamiz
// React Router
import { Switch, Route, useLocation } from "react-router-dom";
// framer motion
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  // console.log(location);
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
          <Route path="/courses/:id">
            <CourseDetail />
          </Route>
          <Route path="/contact">
            <ContactUS />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
