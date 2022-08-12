import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
const App=() => {

 
  const [progress,setprogress]=useState(30)
  
    return (
      <>
        <BrowserRouter>
          <NavBar />

          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setprogress={setprogress}
                  key="general"
                  pagesize={15}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setprogress={setprogress}
                  key="general"
                  pagesize={15}
                  country="us"
                  category="general"
                />
              }
            />
             <Route
              path="/health"
              element={
                <News
                  setprogress={setprogress}
                  key="heakth"
                  pagesize={15}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setprogress={setprogress}
                  key="business"
                  pagesize={15}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setprogress={setprogress}
                  key="entertainment"
                  pagesize={15}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setprogress={setprogress}
                  pagesize={15}
                  key="science"
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setprogress={setprogress}
                  pagesize={15}
                  key="sports"
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setprogress={setprogress}
                  pagesize={15}
                  key="technology"
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  
}

export default App;