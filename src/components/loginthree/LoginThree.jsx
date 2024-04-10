import React from 'react';
import styles from "./LoginThree.module.css";
import { RiFacebookBoxLine, RiGithubLine, RiHaze2Line, RiLineLine, RiRssLine } from 'react-icons/ri';
const LoginThree = () => {
    return (
        <main>
        <div className={styles.desc__part}>
          <div className={styles.logo}>
            <RiHaze2Line size={40}/> web7
          </div>
          <div className={styles.desc__area}>
            <div className={styles.title__part}>
              Don't have an <br/> account ?
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quasi eligendi obcaecati aliquid, iusto doloremque.</p>
            <div className={styles.social}>
              <RiFacebookBoxLine className={styles.socialicon}/>
              <RiLineLine className={styles.socialicon}/>
              <RiGithubLine className={styles.socialicon}/>
              <RiRssLine className={styles.socialicon}/>
            </div>
          </div>
        </div>
        <div className={styles.login__part}>
          <div className={styles.login__wrapper}>
            <div className={styles.login__title}>staff log in</div>
            <form action="">
              <div className={styles.form__container}>
                <input type="text" placeholder="username"/><br/>
              </div>
              <div className={styles.form__container}>
                <input type="text" placeholder="password"/><br/>
              </div>
              <div className={styles.forgot__pass}>
                <a href="/">forget password ? </a>
              </div>
              <input type="submit" value="Submit"/>
            </form>
          </div>
         </div>
      </main>
    );
};

export default LoginThree;