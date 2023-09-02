import './App.scss';
import { Hero, Features, Download, Sidebar } from './components/components.jsx';
import { useState } from 'react';
// import Download from './components/download/Download';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (e) => {
    // if(e.target !== e.currentTarget) return;
    console.log('toggleSidebar');
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <div className="AppContents">
        <Hero toggleSidebar={toggleSidebar}/>
        <Features/>
        <Download/>
      </div>
    </div>
  );
}

export default App;
