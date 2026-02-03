import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export default class News extends Component {
  static defaultProps = {
    pageSize: 10,
    query: 'india',
  };

  static propTypes = {
    pageSize: PropTypes.number,
    query: PropTypes.string,
    mode: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  async updateNews() {
    const { query, pageSize, apiKey } = this.props;
    const { page } = this.state;

    // Fallback to 'india' if query is empty or falsy
    const searchTerm = query || 'india';

    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

    this.setState({ loading: true });

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ page: 1 }, () => {
        this.updateNews();
      });
    }
  }

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.updateNews
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.updateNews
    );
  };

  render() {
    let { colour, pageSize, mode } = this.props;
    let { articles, loading, page, totalResults } = this.state;

    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsCoo - Top Headlines</h2>

        {loading && <Spinner />}

        <div className="row my-3">
          {!loading && articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  colour={colour}
                />
              </div>
            );
          })}
        </div>

        <div className="d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              page + 1 > Math.ceil(totalResults / pageSize) ||
              page * pageSize >= 100
            }
            type="button"
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}