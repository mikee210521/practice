import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './Components/Login/Login.js';
import FormComponent from './Components/FormComponent.js';
import './App.css';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/form" element={<FormComponent />} />
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;

