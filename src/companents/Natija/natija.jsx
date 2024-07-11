import React, { useState, useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useRef } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import './natija.css';

export const Natija = () => {
  const allItems = [
    { title: "Kimyo", group: "Guruh LLA 1", link: "/guruhLLA" },
    { title: "Biologiya", group: "Guruh LLA 2", link: "/guruhLLA" },
    { title: "Tarix", group: "Guruh LLA 3", link: "/guruhLLA" },
    { title: "Matematika", group: "Guruh LLA 4", link: "/guruhLLA" },
    { title: "Biologiya", group: "Guruh LLA 5", link: "/guruhLLA" },
    { title: "Kimyo", group: "Guruh LLA 6", link: "/guruhLLA" },
    { title: "Tarix", group: "Guruh LLA 7", link: "/guruhLLA" },
    { title: "Matematika", group: "Guruh LLA 8", link: "/guruhLLA" },
  ];
  const navRef = useRef();
  const showNavbar = () => {
  navRef.current.classList.toggle('navBar')
  }

  const [filter, setFilter] = useState('Hammasi');
  const [filteredItems, setFilteredItems] = useState(allItems);

  useEffect(() => {
    if (filter === 'Hammasi') {
      setFilteredItems(allItems);
    } else {
      setFilteredItems(allItems.filter(item => item.title === filter));
    }
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.id);
  };

  return (
    <div className="natija">
      <header>
        <nav className="navv">
          <button className="knopka">
            <Link to="/">
              <FaChevronLeft />
            </Link>
          </button>
          <button className="menu " onClick={showNavbar}>
            <IoMenu />
          </button>
          {/* <button className='menu' onClick={showNavbar}>
            <MdOutlineCancel />
          </button> */}

          <div className="nav">
            <h1>Ishonch</h1>
            <ul>
              <li>
                <Link to='/'>Asosiy</Link>
              </li>
              <li>
                <Link to='/'>Kurslar</Link>
              </li>
              <li>
                <Link to='/royhat'>Kursga yozilish</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <aside ref={navRef}>
        <div className="category">
          <ul>
            <li>
              <input type="radio" name="fan" id="Hammasi" onChange={handleFilterChange} /><label htmlFor="Hammasi">Hammasi</label>
            </li>
            <li>
              <input type="radio" name="fan" id="Kimyo" onChange={handleFilterChange} /><label htmlFor="Kimyo">Kimyo</label>
            </li>
            <li>
              <input type="radio" name="fan" id="Biologiya" onChange={handleFilterChange} /><label htmlFor="Biologiya">Biologiya</label>
            </li>
            <li>
              <input type="radio" name="fan" id="Matematika" onChange={handleFilterChange} /><label htmlFor="Matematika">Matematika</label>
            </li>
            <li>
              <input type="radio" name="fan" id="Tarix" onChange={handleFilterChange} /><label htmlFor="Tarix">Tarix</label>
            </li>
          </ul>
        </div>
      </aside>

      <section className="section">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filteredItems.map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.title}
                  </h3>
                  <div className="btn">
                    <h2 className="text-white title-font text-lg font-medium">
                      {item.group}
                    </h2>
                    <button className="text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <Link to={item.link}>Kirish</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
