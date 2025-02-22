// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import TextUtils from './components/TextUtils';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success')
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      <Routes>
        <Route exact path="/TextUtils" element={<TextUtils mode={mode}/>}>
        </Route>
        <Route exact path="/about" element={<About mode={mode}/>}>
        </Route>
        <Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>}>    
        </Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
