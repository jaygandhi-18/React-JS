/*
Props are inputs passed from a parent component to a child component in React.

Key points

Props are read-only (cannot be changed by child)
Used to reuse components
Data flows one-way (parent → child)

********************************************************************************
*/
import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      {props.title}    // for child file // title="WebDev" // for parent to change
      {props.about} 
    </div>
  )
}

/*
PropTypes

PropTypes are used to check the type of props and catch bugs during development.

Why use PropTypes?

Prevents wrong data types
Makes components self-documenting
Helps in debugging

********************************************************************************
*/

Navbar.PropTypes = {
    title: PropTypes.string,    
    about: PropTypes.string.isRequired // to make sure to give value     
} // to check and make sure that give value is in String ot selected from


Navbar.defaultProps = {
    title: 'Set title',
    about: 'Set About'
} // to give default value to props to make sure props is not empty