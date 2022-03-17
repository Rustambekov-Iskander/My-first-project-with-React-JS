import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Navbar from "./Components/UI/navbar/Navbar";
import AppRouter from './Components/AppRouter';
import { AuthContext } from './context';


function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  }, [])

  return (
    <>
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth
      }} 
    >
      <Navbar/>
      <AppRouter/>
    </AuthContext.Provider>
    </>

  );
}

export default App;
