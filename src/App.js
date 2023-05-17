import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from '/.login';


function App() {
  const [currentForm, setCurrenForm]= useState('Giriş');
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;