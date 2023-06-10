/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import Dashboard from "./components/dashboard";
import StudentInfo from "./components/student_info";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/studentinfoentry" element={<StudentInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
