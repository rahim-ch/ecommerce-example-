import React from "react";
import Navbar from "./NavBar";
import FavoriteProvider from './FavoriteProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Routes from "./Routes";
const App = () => {
  return (
    <BrowserRouter>
      <FavoriteProvider>
      
        
        <div className="bg-amazonOrange h-full">
      
       <Routes/>
        </div>

          
        
      </FavoriteProvider>
    </BrowserRouter>
  );
};

export default App;
