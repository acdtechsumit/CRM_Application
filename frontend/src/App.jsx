import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ScrollToAnchor from './components/ScrollToAnchor';
import { refreshUserProfile, getToken } from './services/api';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function AppContent() {
    const location = useLocation();

    useEffect(() => {
        const token = getToken();
        if (token) {
            refreshUserProfile();
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen transition-colors duration-300">
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/dashboard/*" element={<Dashboard />} />

                

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToAnchor />
                <AppContent />
            </Router>
        </ThemeProvider>
    );
}

export default App;
