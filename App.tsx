import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { BookingScreen } from './screens/BookingScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { BottomNav } from './components/BottomNav';

// Wrapper for protected routes
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// Layout component to handle conditional rendering of BottomNav
const AppLayout = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  // Routes where we don't want the bottom nav
  const hideNavRoutes = ['/login', '/register', '/settings'];
  const showNav = isAuthenticated && !hideNavRoutes.includes(location.pathname) && !location.pathname.includes('/booking/');

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground transition-colors duration-300">
      <div className="mx-auto min-h-screen bg-background shadow-2xl overflow-hidden relative">
        <Routes>
          <Route path="/login" element={<AuthScreen />} />
          
          <Route path="/" element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          } />
          
          <Route path="/booking/:id" element={
            <PrivateRoute>
              <BookingScreen />
            </PrivateRoute>
          } />
          
          <Route path="/profile" element={
            <PrivateRoute>
              <ProfileScreen />
            </PrivateRoute>
          } />

          <Route path="/settings" element={
            <PrivateRoute>
              <SettingsScreen />
            </PrivateRoute>
          } />
          
          <Route path="/history" element={
            <PrivateRoute>
              <ProfileScreen />
            </PrivateRoute>
          } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        {showNav && <BottomNav />}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppLayout />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
