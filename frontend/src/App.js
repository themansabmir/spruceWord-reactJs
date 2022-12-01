import './App.css';
import Pages from './components/PAGES/Pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import ScrollTop from './components/PAGES/scrollTop';
//components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <DataProvider>

      <Router>
        <ScrollTop />
        <Navbar />

        <Pages />

      </Router>

  
      

      
      


      

  
    </DataProvider>


  );
}

export default App;
