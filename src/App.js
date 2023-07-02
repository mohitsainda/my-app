
import { useState } from "react";



import "./App.css";
// import About from "./components/About";
import Nabvar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";




function App() {
const [mode, setMode]= useState('light');
const [sbox, setsBox]= useState('Enable Drak mode');

const tmode = ()=>{
  if(mode === 'light')
{  setMode('dark');
  setsBox('Enable light Mode')
  document.body.style.backgroundColor = 'grey';
}
else
{
  setMode('light');
  
  setsBox('Enable Dark Mode')
  document.body.style.backgroundColor = 'white';
}
}
  return (
    <>
    {/* <Router> */}
    <Nabvar title='Lodhi Builders' mode={mode} tmode={tmode} sBox={sbox}  />
    <div className="container my-3"> 
    {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route>
          
          <Route exact path="/"> */}
          <TextForm heading='Enter Text To Analyse'mode={mode}/>
          {/* </Route>
        </Switch> */}
        </div>
     

     
     

    
      
       

    

     
   

     
     {/* </Router> */}
    </>
    
  );
}

export default App;
