import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Main from "../components/Main";

import styles from "../styles/Home.module.css";

export default function Home() {
  const link = "https://google.com";
  // States
  const [isDark, setIsDark] = useState(false);

  // Handlers
  const toggleDark = () => {
    setIsDark(isDark ? false : true);
  };

  // jsx
  return (
    <div className={`${isDark ? "dark" : ""} flex min-h-screen flex-col`}>
      <Navbar dmm={toggleDark} />
      <Main />
    </div>
  );
}
