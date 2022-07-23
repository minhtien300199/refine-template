import React from 'react';
import './App.css';
import { Refine } from '@pankod/refine';
import routerProvider from "@pankod/refine-react-router-v6";
import CustomDataProvider from './services/data-provider';
import CustomAuthProvider from './services/auth-provider';


function App() {
  return (
    <Refine
    routerProvider={routerProvider}
    dataProvider={CustomDataProvider('https://localhost:5000')}
    authProvider={CustomAuthProvider()}
    ></Refine>
  );
}

export default App;
