import { e, isNull } from 'mathjs';
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { ceil } from 'mathjs';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(){
    super();
    this.state={
      article:[],
      loading:false,
      page:0,
      totalResults:null,
      categ:null
    }
   
  }
  capital=(string)=>{
    if(this.props.value)
    return string.charAt(0).toUpperCase()+string.slice(1);
    else
    return
  }
  check(){
    var val
      if(this.props.value)
      {
          val=`https://newsapi.org/v2/top-headlines?country=in&${"category="+this.props.value+"&"}apiKey=19ae35fb31734199a5846d890d97542e&page=1&pageSize=3`
          document.title=this.props.value
      }
      else
      {
          val="https://newsapi.org/v2/top-headlines?country=in&apiKey=19ae35fb31734199a5846d890d97542e&page=1&pageSize=3"
          document.title='Home'
      }
      return val
   }  
fetchMoreData = async() => {
  
  this.setState({page:this.state.page+1})
 const url=`https://newsapi.org/v2/top-headlines?country=in&${"category="+this.props.value+"&"}apiKey=19ae35fb31734199a5846d890d97542e&page=${this.state.page}&pageSize=3`     
  this.setState({loading:true});
  let data= await fetch(url)
   let parsedata= await data.json();
   this.setState({
     article:this.state.article.concat(parsedata.articles),
    //  page:this.state.page+1,
     loading:false,
   })
    
  }
 
  async componentDidMount(){
    const url=this.check()
     this.setState({loading:true});
    let data= await fetch(url)
    let parsedata= await data.json();
    this.setState({
      article:parsedata.articles,
      totalResults:parsedata.totalResults,
      loading:false
    })
    this.props.setprogress(100);
  }
  handleonnext= async() =>{
    var url
    if(this.props.value)
   url= `https://newsapi.org/v2/top-headlines?country=in&${"category="+this.props.value+"&"}apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=3`; 
   else
   url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=19ae35fb31734199a5846d890d97542e&page=${this.state.page+1}&pageSize=3`;
   this.setState({loading:true});
   let data= await fetch(url)
    let parsedata= await data.json();
    this.setState({
      article:this.state.parsedata.articles,
      page:this.state.page+1,
      loading:false,
    })
  }
  
  handleonprev= async()=>{
    var url
    if(this.props.value)
   url= `https://newsapi.org/v2/top-headlines?country=in&${"category="+this.props.value+"&"}apiKey=e0b000b768a348c09cc5d04e7bea1bd7&page=${this.state.page+1}&pageSize=3`; 
   else
     url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=e0b000b768a348c09cc5d04e7bea1bd7&page=${this.state.page-1}&pageSize=3`;
     this.setState({loading:true});
    let data= await fetch(url)
    let parsedata= await data.json();
    this.setState({
      article:parsedata.articles,
      page:this.state.page-1,
      loading:false
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Top {this.capital(this.props.value)} Headlines</h1>
      {/* {this.state.loading && <Spinner/>} */}
        <br/>

        <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData} 
           hasMore={this.state.article.length!=this.state.totalResults}
            loader={<Spinner/>}
            scrollableTarget="scrollableDiv"
          >
        <div className="container">   
        <div className='row'>
          {this.state.article.map((element)=>{
            return <div  key={element.url} className='col my-3'>
            <Newsitem source={element.source.name} author={element.author} date={element.publishedAt} title={element.title} description={element.description} imgurl={element.urlToImage?element.urlToImage:"https://static.india.com/wp-content/uploads/2022/09/amazon-great-india-sale-2022.jpg"} url={element.url}/>
            </div >
          })}
        </div>
        </div>
        </InfiniteScroll>
         {/* <div className='container d-flex justify-content-between'>
            <button type="button" disabled={this.state.page<=1} className="btn btn-secondary btn-dark" onClick={this.handleonprev}>&larr;Previous</button>
            <button type="button" disabled={this.state.page+1>(ceil(this.state.totalResults/9))} className="btn btn-secondary btn-dark" onClick={this.handleonnext}>Next&rarr;</button>
        </div>  */}
      </div>
    )
  }
}