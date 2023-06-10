import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBook,
  FiAward,
  FiCalendar,
  FiLogOut,
} from "react-icons/fi";
import "./dashboard.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1 className="sidebar-heading">SES Dashboard</h1>
        <ul className="sidebar-menu">
          <br></br>
          <br></br>
          <li className="sidebar-menu-item">
            <NavLink
              to="/dashboard"
              className="sidebar-menu-link"
              activeClassName="active"
            >
              <FiHome className="sidebar-menu-icon" />
              Home
            </NavLink>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/dashboard/profile"
              className="sidebar-menu-link"
              activeClassName="active"
            >
              <FiUser className="sidebar-menu-icon" />
              Profile
            </NavLink>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/dashboard/courses"
              className="sidebar-menu-link"
              activeClassName="active"
            >
              <FiBook className="sidebar-menu-icon" />
              Courses
            </NavLink>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/dashboard/grades"
              className="sidebar-menu-link"
              activeClassName="active"
            >
              <FiAward className="sidebar-menu-icon" />
              Grades
            </NavLink>
            <br></br>
            <br></br>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/dashboard/schedule"
              className="sidebar-menu-link"
              activeClassName="active"
            >
              <FiCalendar className="sidebar-menu-icon" />
              Schedule
            </NavLink>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br> <br></br>
          </li>
          <li className="sidebar-menu-item logout-button">
            <button className="sidebar-menu-link">
              <FiLogOut className="sidebar-menu-icon" />
              <center>Logout</center>
            </button>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1 className="main-heading">
          Welcome to School of Engineering Sciences Dashboard
        </h1>
        <p className="main-text">
          “The School of Engineering Sciences welcomes you to their upcoming
          20th anniversary!”
        </p>
      </div>
    </div>
  );
}

export default DashboardPage;
