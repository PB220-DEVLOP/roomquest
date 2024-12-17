// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/home/auth/Login";
import SignUp from "./pages/home/auth/SignUp";
import ProtectedRoute from "./private/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./pages/Layout";
import RegisterRoom from "./pages/recidencies/RegisterRoom";
import BookRooms from "./pages/client/BookRooms";
import RentARoom from "./pages/client/RentARoom";
import RoomMates from "./pages/client/RoomMates";
import MessOutlets from "./pages/mess/MessOutlets";
import UserHome from "./pages/client/UserHome";
import MultiMessManagerHome from "./pages/mess/MultiMessManagerHome";
import ResidencyOwnerHome from "./pages/recidencies/ResidencyOwnerHome";
import Bookings from "./pages/recidencies/Bookings"
import ExploreNow from "./components/mess/ExploreNow";
import ContactUs from "./components/mess/ContactUs";
import AddRoommateForm from "./pages/client/AddRoomate";
import ViewBooking from "./pages/client/ViewBooking";
import OwnerBookings from "./pages/recidencies/OwnerBooking";
import AboutUs from "./pages/client/About"
import AddMenu from "./pages/mess/AddMenu";
import RegisterMess from "./pages/mess/RegisterMess";

function App() {
  return (
    <>
    {/* <AddMenu/> */}
    {/* <MessOutlets/> */}
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />

            {/* Protected Routes */}
            <Route element={<Layout />}>
              <Route element={<ProtectedRoute allowedTypes={["User"]} />}>
                <Route path="/user-home" element={<UserHome />} />
                <Route path="/book-rooms" element={<BookRooms />} />
                <Route path="/rent-a-room" element={<RentARoom />} />
                <Route path="/add-roommate" element={<AddRoommateForm />} />
                <Route path="/view-booking" element={<ViewBooking />} />
                <Route path="/room-mates" element={<RoomMates />} />
                <Route path="/mess-outlets" element={<MessOutlets />} />
                <Route path="/explorenow" element={<ExploreNow />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
              </Route>

              <Route element={<ProtectedRoute allowedTypes={["Residency Owner"]} />}>
                <Route path="/residence-owner-home" element={<ResidencyOwnerHome />} />
                <Route path="/register-room" element={<RegisterRoom />} />
                <Route path="/register-bookings" element={<Bookings />} />
                <Route path="/owner-booking" element={<OwnerBookings />} />
              </Route>

              <Route element={<ProtectedRoute allowedTypes={["Multi-Mess Manager"]} />}>
                <Route path="/multi-mess-manager-home" element={<MultiMessManagerHome />} />
                <Route path="/mess-outlets" element={<MessOutlets />} />
                <Route path="/add-menu" element={<AddMenu/>} />
                <Route path="/register-mess" element={<RegisterMess/>} />
              </Route>
            </Route>

            {/* Redirect all other paths to login if not matched */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;