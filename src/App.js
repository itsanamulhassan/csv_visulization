import { useState } from 'react';
import { useEffect } from 'react';
import { VscLoading } from 'react-icons/vsc';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [siteLoading, setSiteLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setSiteLoading(false), 1000);
  }, []);

  if (siteLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#faf5ee]">
        <VscLoading className="text-6xl animate-spin text-[#3fc3d0]" />
      </div>
    );
  }

  return (
    <div className="bg-[#f3f5f7]">
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
