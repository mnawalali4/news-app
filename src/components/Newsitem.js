import React from "react";
import pic from "./pic.jpg"
const Newsitem = (props) => 
{
    let { tittle, description, ImageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <span
            className="position-absolute top-0 start-100 translate-middle badge text-bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img src={!ImageUrl?pic:ImageUrl} className="card-img-top" alt="..." onError={(e) => {
              e.currentTarget.src = pic;
            }} />

          <div className="card-body">
            <h5 className="card-title">{tittle}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-subtitle mb-2 text-muted">
              By {author} on {new Date(date).toGMTString()}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem