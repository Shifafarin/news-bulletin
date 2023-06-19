// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,description,imgurl,url,author,date,source}=this.props;
    return (
      <div>
       
        <div className="card" style={{width: "18rem"}}>
        <span class="position-absolute translate-middle badge rounded-pill bg-danger" style={{left:'80%', top:'-1.5%'} }>{source}</span>
  <img src={imgurl} className="card-img-top" alt="..."/>
  
  <div className="card-body">
    
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toDateString()}</small></p>
    <a href={url} className="btn btn-sm btn-primary">know more..</a>
  </div>
</div>

    </div>
   
    )
  }
}
