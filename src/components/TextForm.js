import React, {useState} from 'react'

const styleCenter = {
  textAlign: "center"
}

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = (event)=>{
    event.preventDefault();
    console.log("Convert to UpperCase was clicked");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleDownClick = ()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleOnChange = (event)=>{
    
    console.log("On Change");
    setText(event.target.value)
  }

  const handleFunctionEl = ()=>{
let newText = text.trimStart();
newText = newText.trimEnd();
setText(newText)
props.showAlert("Successfully Trimmed", "success");

  }
  const clearTextEl = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "warning");
  }

  const inverseCaseEl = ()=>{
    let newText = text;
    let result = "";
    for(let i = 0; i < newText.length; i++){
      if(text.charAt(i) == text.charAt(i).toLowerCase()){
       result+= text.charAt(i).toUpperCase();
      }else{
        result+=  text.charAt(i).toLowerCase();
      }
    }
    setText(result);
    props.showAlert("Inversed text", "primary");
    
  }
  return (
    <>
    <div>
     <form>
  <div className="container mx-auto my-3" style={{color: props.mode==='dark'?'white':'black'}}>
<label htmlFor="myBox"><h3> {props.explaination} </h3></label>
    <textarea style={{backgroundColor: props.mode==='dark'?'#1d226e':'beige', color: props.mode==='dark'?'beige':'black'}} value={text} onChange={handleOnChange} className="form-control" id="myBox" aria-describedby="emailHelp" name="" cols="30" rows="8"></textarea>
    <br />
    <div className=''>
    <button type='button' className="btn btn-primary m-3" onClick={handleUpClick}>Convert to UpperCase</button>
    <button type='button' className="btn btn-primary m-3" onClick={handleDownClick}>Convert to LowerCase</button>
    <button type='button' className="btn btn-primary m-3" onClick={handleFunctionEl}>Remove extra spacing</button>
   <button type='button' className="btn btn-primary m-3" onClick={clearTextEl}> Clear Text</button>
   <button type='button' className="btn btn-primary m-3" onClick={inverseCaseEl}> iNvErSe FuNcTiOn </button>
    </div>

   <br /><br /> 
   <div style={{color: props.mode==='dark'?'white':'black'}}>
   <small id="disclamier" className="">We'll never share your inputs with anyone else.</small>
   </div>
  </div>
  <br />
  
  
</form>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
<h2>Your Text Summary</h2>
<p className='my-4'>{text.split(" ").length} words {text.length} characters</p>
<p>Minutes to read: {0.008 * text.split(" ").length}</p>
<h2>Preview</h2>
<p>{text.length > 0?text:'Enter some text in above text area to preview'}</p>

    </div>
    </>
  )
}
