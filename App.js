
import './App.css';

import News from './Component/News';
import { useEffect, useState } from 'react';
import "./Component/News.css"

function App() {

  let [articles, setarticles] = useState([]);
  let [category, setcategory] = useState("India")
  

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-08&apiKey=9263bdb8eeb740dbba5b973e9b907dfc`)
      .then((response) => response.json())
      .then((news) => {
        setarticles(news.articles);
        console.log(news.articles)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [category])

  return (

    <div className="App">

      <header className='header'>
        <h1>Latest News</h1>
        
        <input type="text" onChange={(event) => {
          if (event.target.value) {
            setcategory(event.target.value);
          }
          else {
            setcategory("india");
          }

        }} placeholder='Search News'></input>
      </header>

      <section className="newsarticle">

        {

          articles.length !== 0 ?

            articles.map((article) => {
              return (
                <News article={article} />

              )
            })
            :
            <h3>No News Found For Searched Text</h3>

        }

      </section>
    </div>

  );
}


export default App;
