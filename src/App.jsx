import './App.css'

import { HashRouter, Route, Routes, } from "react-router";

import { Layout } from './layout/layout/Layout';
import { Home } from './pages/home/Home';
import { Vitrine } from './pages/vitrine/Vitrine';

function App() {

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/vitrine" element={<Vitrine/>} />
        </Routes>
      </Layout> 
    </HashRouter>
  )
}

export default App
