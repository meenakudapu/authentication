import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './components/Login';
//import { useAuth } from './AuthContext';  



const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
