import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles.css';
import Procedures from './components/Procedures';
import Contact from './components/Contact'
import Home from './components/Home';



ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
    <Route
        index
        element={
            <Home/>
        }
      />
    <Route path="procedures" element={<Procedures/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Route>
  </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
  );
