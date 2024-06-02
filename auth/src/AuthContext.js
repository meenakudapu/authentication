import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
const axios=require('axios')
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const[token,setToken]=useState(null);
    const navigate = useNavigate(); 

    const loginAction = async (data) => {
       try{
        const response=await axios.post("http://localhost:4000/login",{...data})
        if(response.data){
            setUser(data.username)
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token)
            return
        }
        throw new Error(response.message)
       }catch(err){console.log(console.log(err))}
    };

    const logoutAction = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token")
        navigate('/login'); // Use navigate instead of history.push
    };

    return (
        <AuthContext.Provider value={{ token,user, loginAction, logoutAction }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
export  default AuthProvider;