import React from 'react';

import "./App.css";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'

import Logine from './pages/LogIn-Employeer'
import Singupe from './pages/Signup Employeer';




const App = () => (
    
        <div className='container'>
            <Router>
                <Routes>

                        <Route path="/"  element={<Logine/>}/>
                        <Route path="/signupe" element={<Singupe/>}/>
                        
                </Routes>
            </Router>
        </div>
  
);

export default App;