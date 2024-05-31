import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';
import CoachSignUp from './Credentials/CoachSignUp';
import CoachLogin from './Credentials/CoachLogin';
import UserSignUp from './Credentials/UserSignUp';
import UserLogin from './Credentials/UserLogin';
import CoachHome from './Coach/CoachSchedules';
import CoachProfile from './Coach/CoachProfile';
import UserHome from './User/UserHome';
import UserProfile from './User/UserProfile';
import UserApointments from './User/UserAppointments';
import BookAppointment from './User/BookAppointment';
import RescheduleAppointment from './User/ResheduleAppointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coachsignup" element={<CoachSignUp />} />
          <Route path="/usersignup" element={<UserSignUp />} />
          <Route path="/coachlogin" element={<CoachLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/coachhome" element={<CoachHome />} />
          <Route path="/coachprofile" element={<CoachProfile />} />
          <Route path="/userprofile/:id/*" element={<UserProfile />} />
          <Route path="/userhome/:id/*" element={<UserHome />} />
          <Route path="/userappointments" element={<UserApointments />} />
          <Route path="/bookappointment/:id/*" element={<BookAppointment />} />
          <Route path="/resheduleappointment/:id/*" element={<RescheduleAppointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
