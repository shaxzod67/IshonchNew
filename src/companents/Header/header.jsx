import React, { useContext } from 'react';
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaRegUserCircle } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import ishonchpng from '../../img/Ishonch.png';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../contex/AuthContext';
const Header = () => {
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
                        {!token ? (
                            <div className='sign'>
                                <button className="signup">
                                    <FaUserPlus />
                                    <NavLink className="hover:text-white ml-1" to="/signup">SignUp</NavLink>
                                </button>
                                <button className="signin">
                                    <FaRegUserCircle />
                                    <NavLink className="hover:text-white ml-1" to="/signin">SignIn</NavLink>
                                </button>
                            </div>
                        ) : (
                            < div className='sign'>
                                <button className="signin">
                                    <Link to="/natija">Natija</Link>
                                </button>
                                <button onClick={handleSignOut} className="signup">
                                    <BiExit />
                                    <span className="ml-1">Chiqish</span>
                                </button>
                            </div>
                        )}
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
                            <br className="hidden lg:inline-block" />Markazi
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><Link to="/royhat">Ro'yhatdan o'tish</Link></button>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Bizning o'quv markazimizdagi fanlar </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Bizning o'quv markazimizdagi fanlar quyidagi darsliklar boyicha tolliq darslar otiladi</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                            <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">Kimyo</h2>
                            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>First Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Second Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Third Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fourth Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fifth Link
                                </a>
                            </nav>
                        </div>
                        <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                            <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">Biologiya</h2>
                            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>First Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Second Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Third Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fourth Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fifth Link
                                </a>
                            </nav>
                        </div>
                        <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                            <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">Tarix</h2>
                            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>First Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Second Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Third Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fourth Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fifth Link
                                </a>
                            </nav>
                        </div>
                        <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                            <h2 className="font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left">Matematika</h2>
                            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>First Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Second Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Third Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fourth Link
                                </a>
                                <a>
                                    <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokrLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Fifth Link
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">2.7K</h2>
                            <p className="leading-relaxed">O'quvchilar</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">45</h2>
                            <p className="leading-relaxed">Ustozlar</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">4</h2>
                            <p className="leading-relaxed">Fanlar</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">2</h2>
                            <p className="leading-relaxed">Filial</p>
                        </div>

                    </div>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Anvar Jorayev</h2>
                                    <h3 className="text-gray-500 mb-3">Kimyo</h3>
                                    <p className="mb-4">Jizzax Davlat Pedagogika inustutini tamomlagan</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Doston Hakimov</h2>
                                    <h3 className="text-gray-500 mb-3">Biologiya</h3>
                                    <p className="mb-4">Jizzax Davlat Pedagogika inustutini tamomlagan</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Bahodir Torayev</h2>
                                    <h3 className="text-gray-500 mb-3">Tarix</h3>
                                    <p className="mb-4">Jizzax Davlat Pedagogika inustutini tamomlagan</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Lobar Ahmedova</h2>
                                    <h3 className="text-gray-500 mb-3">Matematika</h3>
                                    <p className="mb-4">Jizzax Davlat Pedagogika inustutini tamomlagan</p>
                                    <span className="inline-flex">
                                        <a className="text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
