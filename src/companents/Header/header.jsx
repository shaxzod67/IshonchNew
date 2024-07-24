
import { Link } from 'react-router-dom';
import bg2 from '../../img/bg2.jpg';
import { Reyting } from './reyting';
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
                            <span className="ml-3 text-xl">Ishonch</span>
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
                            Ishonch O'quv markazi
                        </h1>
                        <p className='ishonch_p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Et laboriosam nemo alias facere velit cupiditate illum
                            possimus praesentium dignissimos, expedita quisquam repellendus,
                            ab at unde. Ducimus numquam blanditiis tempora ipsum laudantium
                            quisquam veritatis temporibus eaque, esse reiciendis aspernatur,
                            voluptatum repellendus.
                        </p>
                        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"><Link to="/royhat">Ro'yhatdan o'tish</Link></button>

                    </div>
                    <div className="header_ong" data-aos="fade-left">
                        <img src={bg2} alt="" />
                    </div>
                </div>
            </header>
            <section className="text-gray-400 body-font h-[auto]">

                <Reyting />
                <Fanlar />
                <Jamoa />
            </section>
            <Footer />
        </div>
    );
};

export default Header;
