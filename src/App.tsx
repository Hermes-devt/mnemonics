import React from 'react';
import './App.css';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import PoaSystem from './components/POA_system/poa_system';

function App() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <PoaSystem />
    </div>
  );
}

export default App;
