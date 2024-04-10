import React from 'react';
import styles from "./LoginOne.module.css";
import { RiBrainFill } from 'react-icons/ri';
import LogOneImage from "../../assets/banner.jpg"

const LoginOne = () => {
    return (

        <main>
        <div className={styles.banner__part}>
          <img src={LogOneImage} alt=""/>
        </div>
        <div className={styles.form__part}>
          <div className={styles.form__wrapper}>
            <div className={styles.logo}><RiBrainFill size={80}/></div>
            <span>welcome back</span>
  
            <form action="">
              <div className={styles.form__control}>
                <input type="text" placeholder="username"/> <br/>
              </div>
              <div className={styles.form__control}>
                <input type="text" placeholder="password"/>
              </div>
              <div className={styles.forgot__pass}><a href="/">forget password</a></div>
              <input type="submit" value="submit"/>
            </form>
          </div>
        </div>
    </main>
    );
};

export default LoginOne;