/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "./Nav.module.scss";

const Navigation = () => {
  return (
    <>
      <div className={style.navbar}>
        <Link href="/">
          <img
            className={style.tittle}
            src="/images/vivek_sign.png"
            alt="image"
            width={0}
            height={0}
          />
        </Link>


        <div className={style.links}>
         
          <Link href="https://www.instagram.com/vivek_chaurasiya_01/" target="blank">
            <img
              src="/images/instagramBlack.png"
              width={30}
              height={0}
              alt="image"
            />
          </Link>
          <Link href="https://github.com/vivekcoder01" target="blank">
            <img
              src="/images/github.png"
              width={30}
              height={0}
              alt="image"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/vivekanand-chaurasiya-85ab98261/" target="blank">
            <img
              src="/images/linkedin.png"
              width={30}
              height={0}
              alt="image"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
