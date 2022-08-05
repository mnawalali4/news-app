import './App.css';
import { Link,BrowserRouter,Route,Routes } from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<News key="general" pagesize={15} country="us" category="general"/>}/>  
          <Route path="/general" element={<News key="general" pagesize={15} country="us" category="general"/>}/> 
          <Route path="/business" element={<News key="business" pagesize={15} country="us" category="business"/>}/>
          <Route path="/entertainment" element={<News key="entertainment" pagesize={15} country="us" category="entertainment"/>}/>
          <Route path="/science" element={<News pagesize={15} key="science" country="us" category="science"/>}/>
          <Route path="/sports" element={<News pagesize={15} key="sports" country="us" category="sports"/>}/>
          <Route path="/technology" element={<News pagesize={15} key="technology" country="us" category="technology"/>}/>                 
        </Routes>
      </BrowserRouter>
        
      </div>
    )
  }
}


