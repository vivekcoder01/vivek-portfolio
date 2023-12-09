/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Projects from "./Projects";
import { Inter } from "@next/font/google";
import style from "@/styles/Home.module.css";
import Education from "./Education";
import Skills from "./Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Designed and Developed with ❤️ by @mdAzad"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000"></meta>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=optional" />
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=optional" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=optional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        {/* 1. hero section  */}
        <div className="hero_section hero">
          <span >
           <img className="profile-pic " src="/images/Portfolio-DP.jpg" alt="pic"/>
          </span>
          <div className="heading">
           Software Engineer
          </div>

          {/* <div className="sub_heading">Hello, my name is Md Azad...</div> */}
          <span className="hero-buttons">
          <a href="#about">
            <button className="about_btn animated-btn ">about me</button>
          </a>
          <a href="add HERE your google drive link of PDF resume"className="resume-download" > 
              <img  src="/icons/downloading_fill.svg" alt="resume"/>
                  
          </a>
          </span>
        </div>

        <Education/>
        <Skills/>
        {/* . my works */}
        <div className="works_section" id="works">
          <div className="section_name">
            <h1 className="heading">PROJECTS</h1>
          </div>
          <div className="projects">
          <Projects />
          </div>
        </div>

        <p className="footer">Designed and Developed with ❤️.</p>
      </main>
    </>
  );
}
