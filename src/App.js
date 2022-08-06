import './App.css';
import Home from './Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import SignupPage from './Components/SignupPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';

function App() {

  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignUpPage" element={<SignupPage />} />
    </Routes>
  )
}

export default App;
