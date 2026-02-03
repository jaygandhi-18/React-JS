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
      searchQuery: "",
    };
  }
  
  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

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
          onSearch={this.handleSearch} 
          title="News Coos" 
          mode={this.state.mode} 
          togglemode={this.toggleStyle} 
          modeName={this.state.btnText} 
        />
        <News 
          query={this.state.searchQuery}  
          colour={this.state.colour} 
          pageSize={10} 
          mode={this.state.mode}  
          apiKey="d304d96902da4e289ff4d456f3f1567c" 
        />
      </div>
    );
  }
}