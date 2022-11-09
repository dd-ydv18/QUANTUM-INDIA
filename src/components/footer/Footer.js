import {GrInstagram,GrLinkedin } from "react-icons/gr"
import { AiOutlineTwitter } from "react-icons/ai";
import './Footer.css';
const Footer = () => {
    return(
        <div className="footer">
            <span className="name">
                Quantums made by - Devanand Yadav
            </span>
            <p style={{color: "#DCDCDC"}}>Contact us - quantums@gmail.com</p>
            <hr style={{width: "80%"}}/>
            <div className="iconContainer">
                <ul>
                    <li><a href="https://www.instagram.com/" target="__blank"><GrInstagram size='20px'/></a></li>
                    <li><a href="https://www.linkedin.com/feed/"target="__blank"><GrLinkedin size='20px'/></a></li>
                    <li><a href="https://twitter.com/home" target="__blank"><AiOutlineTwitter size='25px'/></a></li>
                </ul>
            </div>
        </div>
    );
};
    
export default Footer;