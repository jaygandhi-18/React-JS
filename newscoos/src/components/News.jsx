import React, { useState, useEffect } from 'react'
import NewsItem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {

        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [props.category])


    const fetchMoreData = async () => {

        setPage(page+1)

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json()

        setArticles(prevArticles => prevArticles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };


    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px' }}>
                NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>

            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">

                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title || ""}
                                    description={element.description || ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general',
}

export default News
