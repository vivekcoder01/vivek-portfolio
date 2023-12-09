/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";

const Data = [
  {
    
    key: 1,
    img: "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png",
    tittle: "Personal Portfolio",
    description:
      "React.js | SCSS | Responsive",
    code: "#Add Link Here",
    demo: "https://modest-azad.vercel.app/",
  },
  
];

const Projects = () => {
  const [currentData, setData] = useState(Data);

  return (
    <>
      {Data.map((currentData) => {
        return (
          <div className="animated-cardcards" key={currentData.key}>
            <div className="card ">
              <div className="head">
                <img
                  src={currentData.img}
                  className="head-img"
                  alt="image"
                  width={0}
                  height={0}
                />
              </div>
              <div className="body">
                <h3 className="tittle">{currentData.tittle}</h3>
                <div className="descriptions">{currentData.description}</div>
                <div className="buttons">
                  <button className="live-demo">
                    <a href={currentData.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </button>
                  <button className="view-code">
                    <a href={currentData.code} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
