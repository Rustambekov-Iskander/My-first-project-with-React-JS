import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from '../router';
import { AuthContext } from '../context';

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
    return (
        <div>
        <Routes>      
          {isAuth
            ?
            PrivateRoutes.map (route => 
              <Route
                path={route.path}
                element={route.component}
                exact={route.exact}
                key={route.path}
              />
              )
            :
            PublicRoutes.map (route => 
              <Route
                path={route.path}
                element={route.component}
                exact={route.exact}
                key={route.path}
              />
              )
          }
          
          
        </Routes>
        </div>
    );
};

export default AppRouter;