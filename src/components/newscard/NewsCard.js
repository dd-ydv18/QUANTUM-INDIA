import "./NewsCard.css";
import { useState, useEffect } from "react";
import { Button,makeStyles } from "@material-ui/core";
import { IoCopy } from "react-icons/io5";
import CopyToClipboard from "react-copy-to-clipboard";
import { teal } from "@material-ui/core/colors";

//BUTTON THEME :
const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    fontFamily: "Rozha One",
    color: teal[500],
    fontSize: 17,
    float: "left",
  },
});

const NewsCard = ({ newsItem, category }) => {
  const classes = useStyles();
  const [copied, setIsCopied] = useState(false);

  const  handleCopy = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (copied) setIsCopied(false);
    }, 2000);
  }, [copied]);

  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour >12 ? true : false;

  return (
    <div className="newsCard">
      <span className="container">
        <img
          className="newsImage"
          alt={""}
          src={
            newsItem.urlToImage/*if url to image exist */
              ? newsItem.urlToImage/* then this image // else below image */
              : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
          }
        />
        <button className="btn">{category}</button>
      </span>
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />{" "}
          <span className="author">
            <a href={newsItem.url} target="__blank">
              <b>News </b>
            </a>
            <span className="muted">
              by {newsItem.author ? newsItem.author : "unknown"}/{" "}
                                  {time
                          ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                          : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                        on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem.description}</div>
          <CopyToClipboard text={newsItem.url} onCopy={handleCopy}>
            <div className="readmore">
              <div id="container">
                <a href={newsItem.url} target="__blank">
                  <Button color="primary" className={classes.root}>
                    Read More
                  </Button>
                </a>
                <div className="wrapper">
                  <p id="first">{copied && <p>copied!</p>}</p>
                  <IoCopy id="second" color="#009688" size="20px"></IoCopy>
                </div>
              </div>
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

// className="btn btn-danger"
// className={classes.root}
