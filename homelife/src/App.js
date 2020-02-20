import React from 'react';
import './App.css';
import { HashRouter} from 'react-router-dom'
import RouterMap from './router/RouterMap'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {
  return (
    <HashRouter>
      <Header></Header>
      <RouterMap></RouterMap>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
