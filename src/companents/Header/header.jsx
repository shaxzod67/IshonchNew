import React, { useContext } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaRegUserCircle } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import ishonchpng from '../../img/Ishonch.png';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../contex/AuthContext';
import { notification } from 'antd';
import { Reyting } from './reyting';
import { Fanlar } from './fanlar';
import { Jamoa } from './jamoa';
const Header = () => {
    // const handleClick = () => {
    //     return notification.info({
    //         message: "Kuting ",
    //         description: "Bir necha soniya ichida natijalar ko'rinadi"
    //     })
    // }
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const token = localStorage.getItem('user');

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' });
                navigate('/signin');
            })
            .catch((error) => {
                console.error('Sign out error:', error);
            });
    };


    return (
        <div>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="navbar">
                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Ishonch</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <ul>
                            <li>
                                <Link to='/'>Asosiy</Link>
                            </li>
                            <li>
                                <Link >Fanlar</Link>
                            </li>
                            <li>
                                <Link to="/natija">Natijalar</Link>
                            </li>
                            <li>
                                <Link to='/royhat'>Aloqa</Link>
                            </li>
                        </ul>




                    </nav>
                </div>
            </header>
            <section className="text-gray-400 bg-gray-900 body-font h-[auto]">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                        <img className="object-cover object-center rounded w-[100%] h-[100%]" alt="hero" src={ishonchpng} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Ishonch o'quv
                            <br className="hidden lg:inline-block" /> markazi
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><Link to="/royhat">Ro'yhatdan o'tish</Link></button>
                        </div>
                    </div>
                </div>
                 <Reyting/>
                  <Fanlar/>
                  <Jamoa/>

            </section>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Ishonch</span>
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 Ishonch —
                        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-400">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Header;
