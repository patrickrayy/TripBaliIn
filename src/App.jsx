import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { useState } from "react";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ItineraryPage from './pages/ItineraryPage';
import Destinationpage from "./pages/DestinationPage";
import AboutAfter from "./pages/AboutAfter";
import TransportationPage from "./pages/TransportationPage";
import DetailVehicle from "./components/DetailVehicle";
import ItineraryAfter from "./pages/ItinerarAfterLog";
import ContactAfter from "./pages/ContactAfterLog";
import ProfilePage from "./pages/ProfilPage";
import SideBar from "./components/Sidebar"; 
import HistoryBooking from "./pages/history"; 
import ItineraryCreator from "./pages/ItineraryCreator";
import ItineraryPreview from "./pages/ItineraryPreview";
import AccommodationPage from "./pages/AcomodationPage";
import VillaDetailsPage from "./pages/VillaDetailsPage";
import BookingPage from "./pages/BokingPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentCompleted from "./pages/PaymentCompleted";

function App() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Paths where Navbar should not be displayed
  const hideNavbarPaths = ['/login', '/register', '/contact'];
  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/itinerary' element={<ItineraryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/destination' element={<Destinationpage />} />
        <Route path='/aboutafter' element={<AboutAfter />} />
        <Route path="/transportation" element={<TransportationPage />}>
          <Route path=":id" element={<DetailVehicle />} />
        </Route>
        <Route path='/IteneraryAfter' element={<ItineraryAfter/>} />
        <Route path='/contactafter' element={<ContactAfter/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/history' element={<HistoryBooking/>} />
        <Route path='/Sidebar' element={<SideBar/>} />
        
        {/* <Route path='/acomodation' element={<AcomodationPage />} /> */}
        <Route path='/itinerarycreator' element={<ItineraryCreator/>} />
        <Route path="/itinerary-preview" element={<ItineraryPreview/>}/>
        <Route path='/accommodation' element={<AccommodationPage />} />
        <Route path='/villa-details/:id' element={<VillaDetailsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-completed" element={<PaymentCompleted />} />
        {/* <Route path='/destination' element={<DestinationPage />} /> */}
        {/* <Route path='/profile' element={<ProfilePage />} /> */}
        {/* <Route path='/transportation' element={<TransportationPage />} /> */}
      </Routes>
    
    </>


  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
