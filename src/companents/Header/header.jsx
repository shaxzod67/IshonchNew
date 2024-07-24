
import { Link } from 'react-router-dom';
import { Fanlar } from './fanlar';
import { Jamoa } from './jamoa';
import { Footer } from './footer';
import { useState } from 'react';
import { MdHome } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../../img/logo.png'

const Header = () => {



    const handleTel = () => {
        window.location.href = "tel:+998992727907";

    };


    const [active, setActive] = useState("navUl");
    const [toggleNav, setToggleNav] = useState("lineBig");
    const handleClickNavbar = () => {
        active === "navUl"
            ? setActive("navUl navUl_active")
            : setActive("navUl")


        toggleNav === "lineBig"
            ? setToggleNav("lineBig toggle")
            : setToggleNav("lineBig")
    }
    return (
        <div>
            <header>
                <div className="navbar" >
                    <div className="navbar1">
                        <Link to="/" className="logoBox">
                            <img src={logo} alt="" />
                            <span>Ishonch</span>
                        </Link>
                        <nav >
                            <ul className={active}>
                                <li>
                                    <Link to='/'><MdHome /> Asosiy</Link>
                                </li>
                                <li>
                                    <a href='#fanlar' > <FaBookOpen />Fanlar</a>
                                </li>
                                <li>
                                    <Link to="/natija"><BsGraphUp />Natijalar</Link>
                                </li>
                                <li >
                                    <Link><FaPhoneAlt />
                                        <button onClick={handleTel}>Aloqa</button></Link>
                                </li>

                            </ul>
                            <div className="mediaTel">
                                <Link><FaPhoneAlt />
                                    <button onClick={handleTel}>Call</button></Link>
                            </div>
                            
                        </nav>
                        <div onClick={handleClickNavbar} className={toggleNav}>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                    </div>
                </div>
                <div className="header">
                    <div className="header_chap" data-aos="fade-right">
                        <h1 className='ishonch_h1'>
                           FANLARNI BIZ BILAN QULAY <span>MUHITDA</span> O'RGANING
                        </h1>
                        <button><Link to="/royhat">Ro'yhatdan o'tish</Link></button>

                    </div>
                    <div className="header_ong" data-aos="fade-left">
                        <img src="https://i.pinimg.com/564x/39/63/4c/39634cd575aeaff846bd13320e441f38.jpg" alt="" />
                    </div>
                </div>
            </header>
            <section className="text-gray-400 body-font h-[auto]">

                <Fanlar />
                <Jamoa />
            </section>
            <Footer />
        </div>
    );
};

export default Header;
