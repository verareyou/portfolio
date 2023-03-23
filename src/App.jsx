import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, ContactPage, Home, NotFound, ProjectPage } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./components";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div
      style={{ background: theme.primary, color: theme.text }}
      className="App duration-300 min-h-screen overflow-x-hidden "
    >
      {/* <head> */}

      {/* </head> */}
      <Navbar />
      {/* <div className=" sm:mt-[4rem] mt-[6rem] h-[calc(100vh-6rem)] sm:h-[calc(100vh-4rem)] " > */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          {/* <Route path="/projects/:id" element={< />} /> */}
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* error page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;
