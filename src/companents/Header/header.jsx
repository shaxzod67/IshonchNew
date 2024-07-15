
import { Link } from 'react-router-dom';
import bg2 from '../../img/bg2.jpg';
import { Reyting } from './reyting';
import { Fanlar } from './fanlar';
import { Jamoa } from './jamoa';
import { Footer } from './footer';
import { useState } from 'react';
const Header = () => {

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
                <div className="navbar">
                    <div className="navbar1">
                        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Ishonch</span>
                        </Link>
                        <nav >
                            <ul className={active}>
                                <li>
                                    <Link to='/'>Asosiy</Link>
                                </li>
                                <li>
                                    <a href='#fanlar' >Fanlar</a>
                                </li>
                                <li>
                                    <Link to="/natija">Natijalar</Link>
                                </li>
                                <li>
                                    <Link to='/royhat'>Aloqa</Link>
                                </li>

                            </ul>

                            <div onClick={handleClickNavbar} className={toggleNav}>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="header">
                    <div className="header_chap">
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
                    <div className="header_ong">
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
