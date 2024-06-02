import { useState } from "react";
import "./App.css";
import About from "./components/About"; 
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() { 
  const [mode, setMode] = useState('#878E88'); // Default is light mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout( () => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if (mode === '#878E88') {
      setMode('#343a40');
      document.body.style.backgroundColor= '#343a40';
      document.body.style.color = '#878E88';
      showAlert("Dark mode is enabled", "success");
    } 
    else {
      setMode('#878E88');
      document.body.style.backgroundColor= '#878E88'
      document.body.style.color = '#343a40';
      showAlert("Light mode is enabled", "success");

    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode= {toggleMode} aboutText="About"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Textutils- Word counter, Character counter" mode={mode}/>}>
          </Route>
        </Routes>
        {/* <About/>
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/> */}
      </div>
    </Router>
    </>
  );
}

export default App;
