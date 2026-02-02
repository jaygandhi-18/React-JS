import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/everything?q=modi&apiKey=ca9024dd506341cf991327bb4451cd1f&pageSize=${this.props.pageSize}&page=1`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePervClick = async ()=>{
    console.log("prev click")

    let url = `https://newsapi.org/v2/everything?q=india&apiKey=ca9024dd506341cf991327bb4451cd1f&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async ()=>{
    console.log("next ckick")

    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    } else {

    let url = `https://newsapi.org/v2/everything?q=india&apiKey=ca9024dd506341cf991327bb4451cd1f&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page : this.state.page + 1,
      articles: parsedData.articles
    })
  }
  }

  render() {

    let {colour} = this.props;
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsCoo - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} colour={colour}/>
          </div>
        })}
        </div>
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className={`btn btn-${colour}`} onClick={this.handlePervClick}>&larr; Previous</button>
        <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))||this.state.page*this.props.pageSize>=100} type="button" className={`btn btn-${colour}`} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
