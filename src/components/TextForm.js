import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const handleUpClick = () => {
    
    
    let newText = text.toUpperCase();
    settext(newText)
    
  };

  const handleCheckNumClick = () => {
    
    
    let simbol = 0;
    
    for(let i=0; i< text.length;i++)
    {
        if( text[i]=== 'a');
        simbol++;       
        
    };
    settext(simbol);
  
    
    console.log('clickedddd');
    
    
  };

  const handleClearClick = () => {
    
    
    let text = "";
    settext(text)
    
  };

  const handledownClick = () => {
    
    
    let newText = text.toLowerCase();
    settext(newText)
    
  };
  const handleOnChange = (event) => {
   
    settext(event.target.value)
  };
  return (
    <>
    <div className="container">
      <h1 style={{color : props.mode=== 'dark'?'white':'black'}} >{props.heading}</h1>
      <div className={`mb-3 `}>
        <textarea
          className="form-control"
          style={{backgroundColor : props.mode=== 'dark'?'grey':'white' , color : props.mode=== 'dark'?'white':'black'}}
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        convert to uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handledownClick}>
        convert to lowercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-3" onClick={handleCheckNumClick}>
        Check Num
      </button>
      
    </div>

    <div className="container my-2" style={{color : props.mode=== 'dark'?'white':'black'}}>
        <h2>your text summery</h2>
        <p>{text.split(" ").length} <b>and</b> {text.length} characters</p>
    </div>
    
    </>
  );
}
