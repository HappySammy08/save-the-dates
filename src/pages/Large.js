import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import Details from "../components/Details";
import Calendar from "../components/Calendar";

// Styles
import "../styles/desktop.css";

export default function Large() {
  return (
    <div className="Desktop">
      <div className="left-column">
        <Calendar />
      </div>
      <div className="right-column">
        <Header />
        <Divider />

        <Details />
        <Footer />
      </div>
    </div>
  );
}
