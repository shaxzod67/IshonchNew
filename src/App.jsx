import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './companents/Header/header';
import { Natija } from './companents/Natija/natija';
import Royhat from './companents/Royhat/Royhat';
import { GuruhLLA } from './companents/Natija/guruhLLA';
import { Fanlar } from './companents/Header/fanlar';
import Talim from './companents/Header/talim';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/talim" element={<Talim />} />
        <Route path="/natija" element={<Natija />} />
        <Route path="/guruhLLA" element={<GuruhLLA />} />
        <Route path="/fanlar" element={<Fanlar />} />
        <Route path="/royhat" element={<Royhat />} />
      </Routes>
    </>
  );
}

export default App;



