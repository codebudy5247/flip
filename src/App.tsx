import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/header/Navvar'
import Signup from './pages/signup/Signup';
import SignIn from './pages/signin/SignIn';
import Router from './routes';
function App() {
  return (
    <Router />
  );
}

export default App;
