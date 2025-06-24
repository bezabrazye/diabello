
import React, { useContext } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import RegisterScreen from './pages/RegisterScreen';
import MainScreen from './pages/MainScreen';
import ChatScreen from './pages/ChatScreen';
import VoiceCallScreen from './pages/VoiceCallScreen';
import VideoCallScreen from './pages/VideoCallScreen';
import PlaceholderScreen from './pages/PlaceholderScreen';
import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { AppRoutes } from './constants.tsx';

const App: React.FC = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    return <div>Loading auth context...</div>; // Should not happen if AuthProvider wraps App
  }
  const { isAuthenticated } = authContext;
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to={AppRoutes.WELCOME} replace />;
    }
    return <>{children}</>;
  };

  return (
    <HashRouter>
      <div className="flex flex-col h-screen max-h-screen font-sans bg-slate-900">
        {isAuthenticated && <Header onMenuClick={toggleSidebar} />}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <main className={`flex-grow overflow-y-auto ${isAuthenticated ? 'pt-16' : ''}`}>
          <Routes>
            <Route path={AppRoutes.WELCOME} element={<WelcomeScreen />} />
            <Route path={AppRoutes.REGISTER} element={<RegisterScreen />} />
            
            <Route path={AppRoutes.MAIN} element={<ProtectedRoute><MainScreen /></ProtectedRoute>} />
            <Route path={AppRoutes.CHAT} element={<ProtectedRoute><ChatScreen /></ProtectedRoute>} />
            <Route path={AppRoutes.VOICE_CALL} element={<ProtectedRoute><VoiceCallScreen /></ProtectedRoute>} />
            <Route path={AppRoutes.VIDEO_CALL} element={<ProtectedRoute><VideoCallScreen /></ProtectedRoute>} />
            
            <Route path={AppRoutes.MY_DATA} element={<ProtectedRoute><PlaceholderScreen title="Mani dati / Ierīču sinhronizācija" /></ProtectedRoute>} />
            <Route path={AppRoutes.ANALYSIS} element={<ProtectedRoute><PlaceholderScreen title="Diabello analīze" /></ProtectedRoute>} />
            <Route path={AppRoutes.LESSONS} element={<ProtectedRoute><PlaceholderScreen title="Diabēta apmācības / Zināšanu bibliotēka" /></ProtectedRoute>} />
            <Route path={AppRoutes.JOURNAL} element={<ProtectedRoute><PlaceholderScreen title="Žurnāls / Dienasgrāmata" /></ProtectedRoute>} />
            <Route path={AppRoutes.REMINDERS} element={<ProtectedRoute><PlaceholderScreen title="Atgādinājumi" /></ProtectedRoute>} />
            <Route path={AppRoutes.PROFILE_SETTINGS} element={<ProtectedRoute><PlaceholderScreen title="Profila iestatījumi" /></ProtectedRoute>} />

            <Route path="*" element={isAuthenticated ? <Navigate to={AppRoutes.MAIN} replace /> : <Navigate to={AppRoutes.WELCOME} replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;