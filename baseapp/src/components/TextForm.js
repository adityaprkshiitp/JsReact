import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
      // this console is a good method for debugging later not for final show
      // console.log("Uppercase was clicked");
      let newText = Text.toUpperCase();
      setText(newText);
    }

    const handleOnChange = (event)=>{
      // this console is a good method for debugging later not for final show
      //console.log("Onchange");
      setText(event.target.value);
    }
    const handleLowerClick = ()=>{
      let newText = Text.toLowerCase();
      setText(newText);
    }
    const handleClear = ()=>{
      let newText = " ";
      setText(newText);
    }

    const [Text , setText ] = useState('');
    
  return (
    <>
    <div className="container my-3"></div>
    <div className ="mb-3">
      <h1>{props.heading}</h1>
      <label htmlFor = "my box" className="form-label"></label>
      <textarea className ="form-control" value = {Text} onChange = {handleOnChange} id="my box" rows="8"></textarea>
      <button className ="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className ="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className ="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{Text.split(" ").length - 1} words and {Text.length - Text.split(" ").length + 1} characters</p>
      <p>{0.008 * Text.split(" ").length * 60 - 0.48} seconds - average time taken to read the above</p>
      <p>{0.008 * Text.split(" ").length - 0.008} minutes - average time taken to read the above</p>
      <h2>Preview</h2>
      <p>{Text}</p>
    </div>
    </>
  )
}
