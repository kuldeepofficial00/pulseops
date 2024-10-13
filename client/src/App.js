import React from 'react';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="pulseops-app">
        <header>PulseOps Platform</header>
      </div>
    </AuthProvider>
  );
}

export default App;

import './styles/main.css';
