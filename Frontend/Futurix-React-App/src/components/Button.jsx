import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} data-aos="fade-up">
    <Link to={'/register'}>Get Started</Link>
  </button>
);

export default Button;