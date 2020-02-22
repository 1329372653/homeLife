import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import RouterMap from './router/RouterMap'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BackTop } from 'antd';
function App() {
  return (
    <HashRouter>
      <Header></Header>
      <RouterMap></RouterMap>
      <Footer></Footer>
      <BackTop />
      <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
    </HashRouter>
  );
}

export default App;
