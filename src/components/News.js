import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles =[ {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Holly Ellyatt",
        "title": "Ukrainian forces attack key Russian supply route into occupied Kherson; Gazprom cuts Nord Stream 1 gas flows - CNBC",
        "description": "Russian state gas giant Gazprom is due to cut gas supplies via the Nord Stream 1 pipeline again from Wednesday.",
        "url": "https://www.cnbc.com/2022/07/27/russia-ukraine-live-updates.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107090978-1658255419563-gettyimages-1241998387-AFP_32EX2WZ.jpeg?v=1658255541&w=1920&h=1080",
        "publishedAt": "2022-07-27T10:30:00Z",
        "content": "President Putin's spokesman has said that state gas firm Gazprom is supplying as much gas as possible to Europe and that it's wrong to assume a cut in supplies is linked to the EU's sanctions regime … [+1291 chars]"
        },
        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "Jim Gomez",
        "title": "Strong quake kills 4, injures dozens in northern Philippines - The Associated Press - en Español",
        "description": "MANILA, Philippines (AP) — A strong earthquake set off landslides and damaged buildings in the northern Philippines in Wednesday, killing at least four people and injuring dozens. In the capital, hospital patients were evacuated and terrified people rushed ou…",
        "url": "https://apnews.com/article/science-philippines-manila-earthquakes-9e94b57287c26effe19c1badc517d706",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/0aaa91ef1e51466ebcef8063c202aee9/3000.jpeg",
        "publishedAt": "2022-07-27T09:23:31Z",
        "content": "MANILA, Philippines (AP) A strong earthquake set off landslides and damaged buildings in the northern Philippines in Wednesday, killing at least four people and injuring dozens. In the capital, hospi… [+3440 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Matias Grez, CNN",
        "title": "England's women reach Euro 2022 final with stunning win over Sweden - CNN",
        "description": "England's women banished the heartbreak of their two recent major semifinal defeats by beating Sweden 4-0 to reach the final of Euro 2022.",
        "url": "https://www.cnn.com/2022/07/26/football/england-sweden-womens-euro-2022-spt-intl/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220726211903-lucy-bronze-goal-super-tease.jpg",
        "publishedAt": "2022-07-27T09:22:00Z",
        "content": null
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Nadeen Ebrahim, CNN",
        "title": "The last 'Arab Spring' democracy is dangling by a thread - CNN",
        "description": "Once regarded as the sole democracy to have emerged from the mass protests of the Arab Spring in 2011, Tunisia is today voting on a newly minted constitution that analysts fear could be the final nail in the coffin of its democratic era.",
        "url": "https://www.cnn.com/2022/07/25/middleeast/tunisia-referendum-democracy-mime-intl/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220725121248-tunisia-protest-super-tease.jpg",
        "publishedAt": "2022-07-27T09:19:00Z",
        "content": "A version of this story first appeared in CNN's Meanwhile in the Middle East newsletter, a three-times-a-week look inside the region's biggest stories. Sign up here.\r\nAbu Dhabi, UAE (CNN)Once regarde… [+11399 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SciTechDaily"
        },
        "author": null,
        "title": "NASA Spacecraft Finds Pits on the Moon That Always Hover Around a Comfortable Temperature - SciTechDaily",
        "description": "Scientists have discovered shaded locations within pits on the Moon that always hover around a comfortable 63 °F (about 17 °C). The NASA-funded researchers used data from NASA’s Lunar Reconnaissance Orbiter (LRO) spacecraft and computer modeling. The pits, an…",
        "url": "https://scitechdaily.com/nasa-spacecraft-finds-pits-on-the-moon-that-always-hover-around-a-comfortable-temperature/",
        "urlToImage": "https://scitechdaily.com/images/Lunar-Reconnaissance-Orbiter-Artist-Concept.jpg",
        "publishedAt": "2022-07-27T08:54:08Z",
        "content": "ByBill Steigerwald, NASA Goddard Space Flight CenterJuly 27, 2022\r\nArtists rendering of NASAs Lunar Reconnaissance Orbiter. Credit: NASAs Goddard Space Flight Center\r\nScientists have discovered shade… [+5891 chars]"
    }]

    constructor()
    {
        console.log("hello from news component");
        super();
        this.state = {
            articles:this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-4'>
      <h2 className='py-3'>NewsMonkey - Top Headlines</h2>
      <div className='row'>
        <div className='col-lg-4'>
            <Newsitem tittle="myTittle" description="mydesc"/>
        </div>

        <div className='col-lg-4'>
            <Newsitem tittle="myTittle" description="mydesc"/>
        </div>

        <div className='col-lg-4'>
            <Newsitem tittle="myTittle" description="mydesc"/>
        </div>

      </div>
      </div>
    )
  }
}
