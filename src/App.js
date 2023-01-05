import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.scss';

function App() {
  return (
    <>
      
    <Routes >
    <Route path="/" element={<Layout />}>
       <Route path="/dennis-hickox/" exact component={Home} />
       <Route index element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="*" element={<Home />} />
    </Route>
    </Routes>

    </>
  );
}

export default App;
