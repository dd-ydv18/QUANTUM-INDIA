import "./NavNews.css";
import HamburgerDrawer from "./HamburgerDrawer";
import { IoNewspaperSharp } from "react-icons/io5";

const NavNews = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
       <span className="rightside"> 
      <IoNewspaperSharp color="#4F4846" size="41px" />
      {/* <span className="title"> */}
        <h6>{"  "}Quantums India</h6>
      {/* </span> */}
     </span> 
    </div>
  );
};

export default NavNews;
