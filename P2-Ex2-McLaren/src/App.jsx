import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Equip from './components/Equip';
import Historia from './components/Historia';
import Pilots from './components/Pilots';
import Cotxe from './components/Cotxe';
import Contacte from './components/Contacte';
import Multimedia from './components/Multimedia';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inici" element={<Home />} />
        <Route path="/equip" element={<Equip />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/pilots" element={<Pilots />} />
        <Route path="/cotxe" element={<Cotxe />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
