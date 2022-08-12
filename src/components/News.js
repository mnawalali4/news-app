import React, {useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);

  //document.title = ` ${props.category} - NewsMonkey`;

  const updateNews = async () => {
    props.setprogress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=51cf01ac54944c38ba83d4c9e66e68c2&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    //console.log(state.page);
    props.setprogress(100);
    setPage(page + 1);
  };

  useEffect(() => {
    document.title = ` ${props.category} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const handlepreviousclick = async () => {
    await setPage(page-1);
    updateNews();
  };

 const handlenextclick = async () => {
    await setPage(page+1);
    updateNews();
  }; */

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=51cf01ac54944c38ba83d4c9e66e68c2&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page + 1);
    //console.log(state.page);
  };

  return (
    <>
      <h2 className="container py-3 text-center" style={{marginTop:"80px",marginBottom:"20px"}}>
        {" "}
        NewsMonkey - Top {props.category} Headlines
      </h2>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalresults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-lg-4 py-3" key={element.url}>
                  <Newsitem
                    tittle={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    ImageUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author == null ? "unknown" : element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container my-5 px-0 d-flex justify-content-between">
        <button  type="button" disabled={state.page<=1} className="btn btn-primary" onClick={handlepreviousclick}>&larr; Previous</button>
        <button  type="button" disabled={state.page>=Math.ceil(state.totalresults/props.pagesize)} className="btn btn-primary mx-4" onClick={handlenextclick}>Next &rarr;</button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "us",
  pagesize: 15,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
