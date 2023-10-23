import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';



function App() {
  return (
    
      <>
      

      <Navbar title="Text-Utils" />
      <br />
      <TextForm explaination="Enter the text to be formatted" />
        
      </>
    
    
  );
}

export default App;
