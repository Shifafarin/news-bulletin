import './App.css';
// import Navbar from './Components/Navbar';
import News from './Components/News';
import Sidebar from './Components/Sidebar';
import LoadingBar from 'react-top-loading-bar';
//import { useState } from 'react';
import React, { Component } from 'react'



export default class App extends Component {

apikey=process.env.REACT_NEWSBITE_APIKEY;
 state={
  progress:0
 }
 setprogress = (progress) => {
  this.setState({progress:progress})
 }
  render() {
   // const [progress, setProgress] = useState(0)
   
    return (
       <div className="App" id="outer-container">
      <LoadingBar
     color='#f11946'
         progress={this.state.progress}
       />
      {/* <Navbar/> */}
      {/* <Searchbox value={this.props.category?this.props.category:null}/> */}
      
       <Sidebar className='fixed' pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
   
      <News apikey={this.apikey} setprogress={this.setprogress} value={this.props.category?this.props.category:null}/> 
      </div>
     
      </div>
    )
  }
}
