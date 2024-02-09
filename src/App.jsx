import React, { useEffect, useState } from 'react'
const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=04d70bb5ceeb4d9385d7483b97d82b5b"
import './app.css'

const App = () => {
    const [news , setNews] = useState([])
    const fetchNews = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles)
        console.log(data);
    }
    useEffect(()=>{
        fetchNews();
    },[])
    
    const remove = (title)=>{
      const sigle = news.filter((singleNews) => singleNews.title !== title);
      setNews(sigle);
    }
    
  return (
    <div className='main'>
      <center><h1>HeadLines</h1></center>
        <div className="news">
         {
          news.map((myNews)=>{
            return(
              <div className='myNews'>
                <img src={myNews.urlToImage} alt={myNews.publishedAt} />
                <h4>{myNews.title.substring(0, 30)}...</h4>
                <p>{myNews.description.substring(0,80)}...</p>
                <a href={myNews.url} target='_blank'>Read More</a>
                <footer style={{display:'flex', justifyContent:'space-between', margin:'10px 0', padding:'0 12px'}}>
                  <h5>{myNews.author}</h5>
                  <h5>{myNews.publishedAt}</h5>
                </footer>
                <button className='btn' onClick={()=> remove(myNews.title)}>Remove</button>
              </div>
            )
          })
         }
        </div>
    </div>
  )
}

export default App