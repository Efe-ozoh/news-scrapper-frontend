// import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from "./components/header";
import Footer from './components/footer';
import Body from './components/body/body';
import FullPost from './components/fullpost';
import About from './components/about';

function App() {
 

  return (
    <Router>
    <div className="App">
      <Header/>

      <Routes>
       <Route exact path="/" element={<Body/>}/>
       <Route path="/fullpost/:id" element={<FullPost />}/>
       <Route path="/about" element={<About/>} />
       <Route path="*" element={<Body/>} />
     </Routes>

      <Footer/> 
    </div>
    </Router>
  );
}

export default App;
