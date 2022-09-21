import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Otp from './pages/Otp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/otp" element={<Otp/>} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
   </Router>
  )
}

export default App
