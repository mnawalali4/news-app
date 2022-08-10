import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

export default class News extends Component {
    
  static defaultProps = 
  {
    country:'us',
    pagesize:15,
    category:'general'
  }

  static propTypes={
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string

  }

  constructor(props)
  {
      super(props);
      this.state = {
          articles:[],
          loading: true,
          page:1,
          totalresults:0
      }
      document.title = ` ${this.props.category} - NewsMonkey`;
  }

   async updateNews () {
    this.props.setprogress(30)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=51cf01ac54944c38ba83d4c9e66e68c2&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({articles: parsedData.articles,totalresults: parsedData.totalResults,loading:false})
    console.log(this.state.page);
    this.props.setprogress(100)
  }
  
  async componentDidMount()
  {
    this.updateNews()   
    this.setState({page:this.state.page+1})
  }
    
  handlepreviousclick = async () => {
    await this.setState({page:this.state.page-1})
    this.updateNews()
  }
    
  handlenextclick = async () => {
 
      await this.setState
      (
        {page:this.state.page+1,
        }
      )
      this.updateNews()
        
  }
    
  fetchMoreData = async () => {
   await this.setState
    (
      {page:this.state.page+1,
      }
    )
      
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=51cf01ac54944c38ba83d4c9e66e68c2&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({articles: this.state.articles.concat(parsedData.articles),totalresults: parsedData.totalResults,loading:false})
    console.log(this.state.page);
  };


  render() 
  {
    return (
      <div>
        <h2 className='py-3 text-center'> NewsMonkey - Top {this.props.category} Headlines</h2>

        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalresults}
          loader={<Spinner/>}>
        
          <div className="container">
            <div className='row'>
              {this.state.articles.map((element)=>{
                return <div className='col-lg-4 py-3' key={element.url} >
                            <Newsitem tittle={element.title? element.title.slice(0,45):""} description={element.description? element.description.slice(0,80):""} ImageUrl={element.urlToImage} newsUrl={element.url}
                              date={element.publishedAt} author={element.author ==null?"unknown":element.author} source={element.source.name} 
                            />
                        </div>
                        
                })}
            </div>
          </div>

        </InfiniteScroll>

      
        {/* <div className="container my-5 px-0 d-flex justify-content-between">
        <button  type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlepreviousclick}>&larr; Previous</button>
        <button  type="button" disabled={this.state.page>=Math.ceil(this.state.totalresults/this.props.pagesize)} className="btn btn-primary mx-4" onClick={this.handlenextclick}>Next &rarr;</button>
        </div> */}
      
      </div>
    )
  }
}
