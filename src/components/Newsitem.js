import React, { Component } from 'react'

export default class Newsitem extends Component {
constructor()
{
    super();
    console.log("hello")
}

  render() {
    let {tittle, description, ImageUrl,newsID} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}
