import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: "light",
      colour: "white",
      btnText: "Dark Mode",
    };
  }

  toggleStyle = () => {
    if (this.state.mode === "light") {
      document.body.style.backgroundColor = "#161616";
      document.body.style.color = "white";
      this.setState({
        mode: "dark",
        colour: "black",
        btnText: "Light Mode",
      });
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      this.setState({
        mode: "light",
        colour: "white",
        btnText: "Dark Mode",
      });
    }
  };

  render() {
    return (
      <div>
        <NavBar
          title="News Coos"
          mode={this.state.mode}
          togglemode={this.toggleStyle}
          modeName={this.state.btnText}
        />
        <News colour={this.state.colour}/>
      </div>
    )
  }
}



















































// import About from "./components/About";
// import NavBar from "./components/NavBar";

// import React, { useState } from "react";


// function App() {

//    const [mode, setMode] = useState("light");
//     const [btnText, setBtnText] = useState("Dark Mode");
  
//     const toggleStyle = () => {
//       if (mode === "light") {
//         document.body.style.backgroundColor = "#161616";
//         setMode("dark");
//         setBtnText("Light Mode");
//       } else {
//         document.body.style.backgroundColor = "white";
//         setMode("light");
//         setBtnText("Dark Mode");
//       }
//     };

//   return (
//     <>
//     <NavBar title="News Coos" mode={mode} togglemode={toggleStyle} modeName={btnText} />
//     <About />
//     </>
//   );
// }

// export default App;

