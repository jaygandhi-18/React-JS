import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=india&apiKey=ca9024dd506341cf991327bb4451cd1f"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }

  render() {
    let {colour} = this.props;
    return (
      <div className='container my-3'>
        <h2>NewsCoo - Top Headlines</h2>
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} colour={colour}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}
