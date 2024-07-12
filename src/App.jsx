import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './companents/Header/header';
import { Natija } from './companents/Natija/natija';
import Royhat from './companents/Royhat/Royhat';
import { GuruhLLA } from './companents/Natija/guruhLLA';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/natija" element={<Natija />} />
        <Route path="/guruhLLA" element={<GuruhLLA />} />
        <Route path="/royhat" element={<Royhat />} />
      </Routes>
    </>
  );
}

export default App;



