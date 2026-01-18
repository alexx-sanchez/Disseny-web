import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Text from './components/Text';
import Contacte from './components/Contacte';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inici" element={<Home />} />
        <Route path="/text" element={<Text />} />
        <Route path="/contacte" element={<Contacte />} />
      </Routes>
      <Footer />      
    </>
  )
}

export default App
