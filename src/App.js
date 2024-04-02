
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
// import About from './components/About' ;
import React, { useState } from 'react'
import Alert from './components/Alert'





function App() {
  const [mode, setDarkmode] = useState('light');  // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

const showAlert =(message, type)=>{
setAlert ({
  msg : message,
  type : type
})
setTimeout(() => {
  setAlert(null);
}, 1500);

}



const toggleMode =()=>{
  if (mode === 'light'){
    setDarkmode ('dark')
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark mode has been enabled","Success");
  }
  else {
    setDarkmode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled","Success");

  }
}
return (
  <>
    <Navbar title="Reactone" mode={mode} toggleMode={toggleMode} hometext="Homeone" Abouttext="Aboutone" Contacttext="Contactone" Servicestext="Servicesone" />
    <Alert alert= {alert}/>
    <div className="container">
      <Textform  showAlert={showAlert} heading="Enter the text to anaylize below" />
      {/* <About/> */}
    </div>
  </>
);
}


export default App;

