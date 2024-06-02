import React from 'react';
import { useAuth } from '../AuthContext'; 

const Login = () => {
    const auth = useAuth();

    const handleLogin = () => {
        auth.loginAction(); 
    }

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
};

export default Login;
