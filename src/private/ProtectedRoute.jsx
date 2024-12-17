// src/protected-routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ allowedTypes }) => {
    const { currentUser, userType } = useAuth();
    const location = useLocation();

    // Check if the user is authenticated
    if (!currentUser) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Check if the user is authorized
    if (allowedTypes && !allowedTypes.includes(userType)) {
        // Redirect to an unauthorized page if authenticated but not authorized
        return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }

    // Render the Outlet for child components if authenticated and authorized
    return <Outlet />;
};

export default ProtectedRoute;
