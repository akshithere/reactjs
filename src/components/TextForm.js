import React, {useState} from 'react'

const styleCenter = {
  textAlign: "center"
}

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleUpClick = (event)=>{
    event.preventDefault();
    console.log("Convert to UpperCase was clicked");
  }

  const handleOnChange = ()=>{
    
    console.log("On Change");
  }

  return (
    <div>
     <form>
  <div className="container mx-auto my-3">
<label htmlFor="myBox"><h3> {props.explaination} </h3></label>
    <textarea style={styleCenter} value={text} onChange={handleOnChange} className="form-control" id="myBox" aria-describedby="emailHelp" placeholder="Enter text to be formatted" name="" cols="30" rows="10"></textarea>
    <br />
    <button type='button' className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>


   <br /><br /> <small id="disclamier" className="form-text text-muted">We'll never share your inputs with anyone else.</small>

  </div>
  <br />
  
</form>
    </div>
  )
}
