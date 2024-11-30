
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='signup' element={<UserSignup/>}/>
        <Route path='captain-login' element={<Captainlogin/>}/>
        <Route path='captain-signup' element={<CaptainSignup/>}/>
      </Routes>
    </>
  )
}

export default App
