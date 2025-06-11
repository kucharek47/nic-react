import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link to="/"><img src="logo.png" alt="Logo" /></Link>
        <Link to="/autor">Autor</Link>
      </header>
      <main>{children}</main>
      <footer>&copy; 2025 Strona o niczym</footer>
    </>
  );
}
