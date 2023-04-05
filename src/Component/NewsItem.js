import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, newsurl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imgurl ? "https://www.livemint.com/lm-img/img/2023/03/31/600x338/airindia_1680240965694_1680240985339_1680240985339.jpg" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem