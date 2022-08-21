import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage';
import ChatPage from './Pages/ChatPage/ChatPage';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './Util/PrivateRoute'
import { AuthProvider } from './Context/AuthContext'
import VideoChatPage from './Pages/VideoChatPage/VideoChatPage';
import DoctorProfile from './Pages/DoctorProfile/DoctorProfile';
import AppointmentPage from './Pages/AppointmentPage/AppointmentPage';
import PatientPage from './Pages/PatientPage/PatientPage';
import CompletedAppointmentView from './Pages/CompletedAppointmentView/CompletedAppointmentView';
import AppointmentDetailPage from './Pages/AppointmentDetailPage/AppointmentDetailPage';
import Redirect from './Pages/Redirect';

const App = () => {
  return (
    <div className="main-wrapper">
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } exact />

          <Route path="/chat" element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>} />

          <Route path="/profile" element={
            <PrivateRoute>
              <DoctorProfile />
            </PrivateRoute>} />

          <Route path="/redirect" element={
            <PrivateRoute>
              <Redirect />
            </PrivateRoute>} />

          <Route path="/appointments" element={
            <PrivateRoute>
              <AppointmentPage />
            </PrivateRoute>} />

          <Route path="/patients" element={
            <PrivateRoute>
              <PatientPage />
            </PrivateRoute>} />

          <Route path="/completed" element={
            <PrivateRoute>
              <CompletedAppointmentView />
            </PrivateRoute>} />

          <Route path="/appointmentdetails" element={
            <PrivateRoute>
              <AppointmentDetailPage />
            </PrivateRoute>} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/videochat" element={<PrivateRoute>
            <VideoChatPage />
          </PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App