import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/start/start';
import Chat from './pages/chat/chat';
import Main from './pages/main/mainScreen';
import Profile from './pages/profile/profile';
import Select from './pages/select/select';
import Sign from './pages/sign/sign';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/select" element={<Select />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
