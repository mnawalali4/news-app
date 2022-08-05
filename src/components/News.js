import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

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

  constructor()
  {
      super();
      this.state = {
          articles:[],
          loading: false,
          page:1,
          totalresults:0
      }
  }

  async componentDidMount()
  {
    console.log('category',this.props.category)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=51cf01ac54944c38ba83d4c9e66e68c2&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalresults: parsedData.totalResults,loading:false})
    //console.log("cdm",this.state.totalresults)
  }
    
  handlepreviousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=51cf01ac54944c38ba83d4c9e66e68c2&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState(
      {page:this.state.page-1,
        articles: parsedData.articles,
        loading:false
      }
    )
  }
    
  handlenextclick = async () => {
    //console.log(this.totalResults)
    //console.log("out next click")
    if(this.state.page+1<Math.ceil(this.state.totalresults/20))
    {
      //console.log("in next click")
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=51cf01ac54944c38ba83d4c9e66e68c2&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState
      (
        {page:this.state.page+1,
        articles: parsedData.articles,
        loading:false
        }
      )
    }     
  }
    
  render() 
  {
    return (
      <div className='container my-4'>
      <h2 className='py-3 text-center'>NewsMonkey - Top Headlines</h2>
      {this.state.loading && <Spinner/>}
      <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className='col-lg-4 py-3' key={element.url} >
                      <Newsitem tittle={element.title? element.title.slice(0,45):""} description={element.description? element.description.slice(0,80):""} ImageUrl={element.urlToImage} newsUrl={element.url}
                        date={element.publishedAt} author={element.author ==null?"unknown":element.author} source={element.source.name} 
                      />
                  </div>
                  
          })}
      </div>

      <div className="container my-5 px-0 d-flex justify-content-between">
      <button  type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlepreviousclick}>&larr; Previous</button>
      <button  type="button" disabled={this.state.page+1>=Math.ceil(this.state.totalresults/20)} className="btn btn-primary mx-4" onClick={this.handlenextclick}>Next &rarr;</button>
      </div>
      
      </div>
    )
  }
}
