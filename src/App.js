import './App.css';
import { Link,BrowserRouter,Route,Routes } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {

  
  constructor()
  {
    super()
    this.state= {
      progress:30
    }
  }

  setprogress = (progress) =>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
      <BrowserRouter>
        <NavBar/>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Routes>
          <Route path="/" element={<News setprogress={this.setprogress} key="general" pagesize={15} country="us" category="general"/>}/>  
          <Route path="/general" element={<News setprogress={this.setprogress} key="general" pagesize={15} country="us" category="general"/>}/> 
          <Route path="/business" element={<News setprogress={this.setprogress} key="business" pagesize={15} country="us" category="business"/>}/>
          <Route path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" pagesize={15} country="us" category="entertainment"/>}/>
          <Route path="/science" element={<News setprogress={this.setprogress} pagesize={15} key="science" country="us" category="science"/>}/>
          <Route path="/sports" element={<News setprogress={this.setprogress} pagesize={15} key="sports" country="us" category="sports"/>}/>
          <Route path="/technology" element={<News setprogress={this.setprogress} pagesize={15} key="technology" country="us" category="technology"/>}/>                 
        </Routes>
      </BrowserRouter>
        
      </div>
    )
  }
}


