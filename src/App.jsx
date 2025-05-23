import './App.css'

import { HashRouter, Navigate, Route, Routes, } from "react-router";

import Destaque from './pages/destaque/Destaque';
import SobreNos from './pages/SobreNos/SobreNos';
import { Layout } from './layout/layout/Layout';
import { Home } from './layout/home/Home';
import { Vitrine } from './pages/vitrine/Vitrine';

function App() {

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/produtos" element={<Destaque/>} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/contato" element="Contato" />
          <Route path="/vitrine" element={<Vitrine/>} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
