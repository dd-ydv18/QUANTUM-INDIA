import { Container } from "@material-ui/core";
import NewsCard from "../components/newscard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore, category }) => {
  const loadMoreHandler = () => {
    setLoadMore(loadMore + 20);
  }

  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="text" style={{ 'font-family': 'Cormorant Infant', 'weight': '900', 'fontSize': '20px', 'color': '#4F4846' }}>
            For best experience use quantumn app on your mobile phone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://inshorts.com/dist/images/home_page/ios_app_store.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://inshorts.com/dist/images/home_page/android_app_store.png"
          />
        </div>
        {
          newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} category={category} key={newsItem.title} />
          ))
        }

        {
          loadMore <= newsResults && (
            <>
              <hr />
              <button
                className="loadMore"
                onClick={loadMoreHandler}
              >
                Load More
              </button>
            </>
          )
        }
      </div>
    </Container>
  );
};
export default NewsContent;
