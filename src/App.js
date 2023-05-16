import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './login';
import { kayitOl } from './kayitOl';

function App() {
  const [currentForm, setCurrenForm]= useState('Giriş');
  return (
    <div className="App">{
     currentForm=login
    }
    </div>
  );
}

export default App;
