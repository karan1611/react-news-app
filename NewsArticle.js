import React  from 'react'


function NewsArticle({data}) {
        function clickHandler(){
            window.open(data.url)
        }
      return (
          

          <div className="news">
            <h1 className="news-title">{data.title}</h1>
            <p className="news-description">{data.description}</p>
            <span className="news-author">{data.author}</span>
            <span className="news-publish">{data.publishedAt}</span>
            <span className="news-source">{data.source.name}</span>
            <span>
                <button className="news-url" onClick={clickHandler}>{data.url}</button>
                </span>
        </div>
               
    )
}


export default NewsArticle
