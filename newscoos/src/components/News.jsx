import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export default class News extends Component {

  static defaultProps = {
    pageSize: 10,
    search: 'india',
  }

  static propTypes = {
    pageSize : PropTypes.number,
    search: PropTypes.string,
  }


  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/everything?q=${this.props.search}&apiKey=d304d96902da4e289ff4d456f3f1567c&pageSize=${this.props.pageSize}&page=${this.state.page}`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/everything?q=${this.props.search}&apiKey=d304d96902da4e289ff4d456f3f1567c&pageSize=${this.props.pageSize}&page=1`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  handlePervClick = async ()=>{
    console.log("prev click")
    this.setState({page : this.state.page + 1})
    this.updateNews()
  }

  handleNextClick = async ()=>{
    console.log("next ckick")
    this.setState({page : this.state.page + 1})
    this.updateNews()
  }

  render() {

    let {colour} = this.props;
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsCoo - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
        {!this.state.loading && this.state.articles.map((element)=>{
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
