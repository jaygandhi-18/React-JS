import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, colour} = this.props;

    return (
      <div className='py-3 px-2'>
        <div className="card" style={{width: "18rem", backgroundColor: `${colour}` }}>
          <img src={!imageUrl?"https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg":imageUrl} 
          style={{
            height:"160px",
            width:"286px",
            objectFit: 'cover'
          }}
          className="card-img-top" alt="..."/>
          <div className="card-body" style={{ color: colour === "black" ? "white" : "black" }}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
