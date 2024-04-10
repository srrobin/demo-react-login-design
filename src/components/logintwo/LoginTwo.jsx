import React, { useState } from 'react';
import styles from "./LoginTwo.module.css";
import LogTwoLogo from "../../assets/logo1.png"
import { Link } from 'react-router-dom';

const LoginTwo = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🚀 ~ handleSubmit ~ handleSubmit:", username,password)
  }

  return (
    <main>
      <div className={styles.desc__part}>
        <div className={styles.desc__wrapper}>
          <img src={LogTwoLogo} alt="" className={styles.logo}/>
          <div className={styles.title__part}>
            <h1>
              <div className="">nepal telecom</div>
              <div className="">interconnect</div>
            </h1>
            <p className={styles.copyright}>&copy; 2024 nepal telecom, all right received</p>
          </div>
        </div>
      </div>
      
      <div className={styles.login__part}>
        <div className={styles.login__wrapper}>
          <div className={styles.login__title}>Staff login</div>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__container}>
              <input 
                type="text" 
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className={styles.input}
              /><br/>
            </div>
            <div className={styles.form__container}>
              <input 
                type="password" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className={styles.input}
              /><br/>
            </div>
            <div className={styles.forgot__pass}>
              <Link to="/forgotpassword">Forgot password?</Link>
            </div>
            <input type="submit" value="Submit"/>
          </form>
          {error && <div className={styles.error}>{error}</div>} {/* Display error message if there is one */}
        </div>
      </div>
    </main>
  );
};

export default LoginTwo;
