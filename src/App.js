import NavNews from "./components/header/NavNews";
import {useState, useEffect} from 'react';
import NewsContent from "./content/NewsContent";
import axios from "axios";
import Footer from "./components/footer/Footer";
import './App.css';
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults]  = useState();
  const [loadMore, setLoadMore] = useState(20);

  useEffect(() => {
    const getArticles = async () => {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY }&pageSize=${loadMore}&category=${category}` 
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    };
    getArticles();
  }, [category, newsResults, loadMore]);//useeffect changes whenever this three changes i.e. categories//loadmore or total results

  console.log(newsArray);
  return (
    <div className="App">
      <>
      <NavNews setCategory={setCategory}/>
      <NewsContent 
      loadMore={loadMore} 
      setLoadMore={setLoadMore} 
      newsArray={newsArray}
       newsResults={newsResults}
        category={category}/>
      <ScrollToTop showBelow={250}/>
      <Footer/>
      </ >
    </div>
  );
}

export default App;
