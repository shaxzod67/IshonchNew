import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import logo from '../../img/logo.png'
export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_chap">
          <div className="footer_img"> 
            <img src={logo} alt="" />
          </div>
          <div className="footer_info">
            <a href="#fanlar">Fanlar</a>
            <p>
              © "Ishonch o'quv markazi", 2024 - Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
        <div className="footer_ong">
            <div className="footer_link">
                <a href=""><FaFacebook /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaLinkedin /></a>
                <a href=""><BsTelegram /></a>
                <a href=""><FaYoutube /></a>
            </div>
            <div className="footer_call">
                <span>Call markaz</span>
                <p>+998(99) 272 79 07</p>
            </div>
        </div>
      </footer>
    </div>
  );
};
