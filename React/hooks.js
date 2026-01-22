/*
Hooks let you use state and other React features without writing a class.
State & Handling Events in React

*/

// useState is a React Hook that lets you add state (data that can change)
// to a functional component.

import React, {useState} from 'react'

export default function hooks() {

// it click function its run when button is click
  const upClick = () => {
      console.log("UperCase button click " + text);
      let newText = text.toUpperCase();
      setText(newText)
    }

// it onChange function its run when change is make 
    const handleOnChange = (event) => {
      console.log("text enter");
      setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text Here');
// text is current state value and setText is use to update Current text value

  return (
    <div className="mb-3">
      <textarea value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
      {/* value is text so its display what's in text // and onChange is value that gone change */}
    </div>
  )
}

