import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsurl, author, date, source } =
      this.props;
    return (
      <>
        <div className="my-3">
          <span className="badge bg-danger">{source}</span>
          <div className="card" style={{ width: "18rem" }}>
            <img src={!imgUrl ? "https://image.cnbcfm.com/api/v1/image/107051564-1650978911912-gettyimages-1329504877-0o1a8302.jpeg?v=1650978944&w=1920&h=1080": imgUrl}className="card-img-top"alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toGMTString()}{" "}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsurl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
