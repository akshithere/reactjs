import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert.js';



function App() {
  const [mode, setMode] = useState('light'); // state variable which shows whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        });
        setTimeout(()=>{
          setAlert(null)
        },2500);
  }
  const toggleMode = ()=>{
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'beige';
      showAlert("Light Mode has been enabled", "success");
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor = '#0d0f30';
      // You can add a comment here if needed
      showAlert("Dark Mode has been enabled", "success");
        }
  }
  
  return (
    
      <>
      

      <Navbar title="Text-Utils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} explaination="Enter the text to be formatted" mode={mode} />
      {/* <About heading="About Us:" /> */}
      
        
      </>
    
    
  );
}

export default App;
