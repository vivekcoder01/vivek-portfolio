export default function Education(){
  const today = new Date();
    return (
        <>
        {/* 2. about section  */}
        <div className="about_section" id="about">
          {/* about my self */}
          <div className="about_me about_box1">
            <div className="heading">ABOUT ME</div>
            <div className="description">
              Hello 👋,
              <br />
              I&apos;m Vivekanand Chaurasiya. {today.getFullYear() -
                2006}{" "}
              years old. <br/>Pursuing B.Tech in <strong>Computer Science & Engineering (IOT)</strong>. 
             from Government Engineering College, Siwan.
            </div>
            <a href="#skills" className="skills_btn">
              <button >Technical Skills</button>
            </a>
          </div>

           
        </div>
        </>
    )
};