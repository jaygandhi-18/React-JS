import React, {useState} from 'react'

export default function TextFrom(props) {
    const upClick = () => {
      console.log("UperCase button click " + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert(" Converted to Upper Case", "success");
    }
    const loClick = () => {
      console.log("LowerCase button click " + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert(" Converted to Lower Case", "success");

    }
    const mtClick = () => {
      let clearText =  ""
      setText(clearText)
      props.showAlert(" TextArea is Clear", "success")
      
    }
    const handleOnChange = (event) => {
      console.log("text enter");
      setText(event.target.value)
      
    }
    const [text, setText] = useState("");
    // setText("new text");

    

  return (
    <>
    <div className={`container text-${props.mode==='light' ? 'dark' : 'light'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3 "  >
        <textarea className={`form-control bg-${props.mode} text-${props.mode==='light' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button type="button" onClick={upClick} className="btn btn-primary mx-2">To UpperCase</button>
        <button type="button" onClick={loClick} className="btn btn-primary mx-2">To LowerCase</button>
        <button type="button" onClick={mtClick} className="btn btn-danger mx-2">Clear Text</button>

    </div>
    <div className='container'>
      <h2 className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>TextArea Summary</h2>
      <p className={`text-${props.mode==='light' ? 'dark' : 'light'}`}> {text.length} Characters and {text.split(" ").length} Words</p>
      <p className={`text-${props.mode==='light' ? 'dark' : 'light'}`}> { 0.008 * text.split(" ").length }</p>
      <h2 className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>Text Preview</h2>
      <p className={`text-${props.mode==='light' ? 'dark' : 'light'}`}>{text}</p>
    </div>
    </>
  )
}
