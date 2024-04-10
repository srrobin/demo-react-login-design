import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginTwo from './components/logintwo/LoginTwo';
// import LoginOne from './components/loginone/LoginOne';
// import LoginThree from './components/loginthree/LoginThree';
// import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<LoginTwo />} />
        {/* <Route path="/" element={<LoginOne />} /> */}
        {/* <Route path="/login-three" element={<LoginThree />} /> */}
      </Routes>
      </div> 
    </>
  );
};

export default App;
