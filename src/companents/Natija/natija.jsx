import  { useState, useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import './natija.css';

export const Natija = () => {
  const allItems = [
    { title: "Kimyo", group: "Guruh LLA 1", link: "/guruhLLA" , imgs: "https://i.pinimg.com/564x/d5/dd/38/d5dd38a87c9fac55873dd31ba52f68a1.jpg" },
    { title: "Biologiya", group: "Guruh LLA 2", link: "/guruhLLA", imgs:"https://i.pinimg.com/564x/4b/0d/0c/4b0d0ce734afdf6c59ea317c4d4e292b.jpg" },
    { title: "Tarix", group: "Guruh LLA 3", link: "/guruhLLA", imgs:"https://i.pinimg.com/236x/4f/21/fc/4f21fc3d797bbb66ddd37b09e92e70cc.jpg" },
    { title: "Matematika", group: "Guruh LLA 4", link: "/guruhLLA", imgs:"https://i.pinimg.com/236x/cc/fa/54/ccfa547b7bd5488a26fec7a5ea2dd9f6.jpg" },
    { title: "Biologiya", group: "Guruh LLA 5", link: "/guruhLLA", imgs:"https://i.pinimg.com/564x/4b/0d/0c/4b0d0ce734afdf6c59ea317c4d4e292b.jpg" },
    { title: "Kimyo", group: "Guruh LLA 6", link: "/guruhLLA" , imgs: "https://i.pinimg.com/564x/d5/dd/38/d5dd38a87c9fac55873dd31ba52f68a1.jpg"},
    { title: "Tarix", group: "Guruh LLA 7", link: "/guruhLLA", imgs:"https://i.pinimg.com/236x/4f/21/fc/4f21fc3d797bbb66ddd37b09e92e70cc.jpg" },
    { title: "Matematika", group: "Guruh LLA 8", link: "/guruhLLA", imgs:"https://i.pinimg.com/236x/cc/fa/54/ccfa547b7bd5488a26fec7a5ea2dd9f6.jpg" },
    { title: "Tarix", group: "Guruh LLA 9", link: "/guruhLLA", imgs:"https://i.pinimg.com/236x/4f/21/fc/4f21fc3d797bbb66ddd37b09e92e70cc.jpg" },
    { title: "Biologiya", group: "Guruh LLR 1", link: "/guruhLLA" , imgs:"https://i.pinimg.com/564x/4b/0d/0c/4b0d0ce734afdf6c59ea317c4d4e292b.jpg"},
    { title: "Kimyo", group: "Guruh LLR 2", link: "/guruhLLA" ,  imgs: "https://i.pinimg.com/564x/d5/dd/38/d5dd38a87c9fac55873dd31ba52f68a1.jpg"},
    { title: "Tarix", group: "Guruh LLR 3", link: "/guruhLLA", imgs:"https://i.pinimg.com/236x/4f/21/fc/4f21fc3d797bbb66ddd37b09e92e70cc.jpg" },
    { title: "Matematika", group: "Guruh LLR 4", link: "/guruhLLA", imgs:"https://i.pinimg.com/236x/cc/fa/54/ccfa547b7bd5488a26fec7a5ea2dd9f6.jpg" },
    { title: "Kimyo", group: "Guruh LLR 5", link: "/guruhLLA" ,  imgs: "https://i.pinimg.com/564x/d5/dd/38/d5dd38a87c9fac55873dd31ba52f68a1.jpg"},
  ];
  const [showNavbarToggle , setShowNavbar] = useState('aside');
  const showNavbar = () => {
      showNavbarToggle === "aside"
      ? setShowNavbar("aside mediaAside")
      : setShowNavbar("aside");
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
      
        <nav className="navv">
          <button className="knopka">
            <Link to="/">
              <FaChevronLeft />
            </Link>
          </button>
          <div className="menu" onClick={showNavbar}>
            <IoMenu />
          </div>
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
      <aside className={showNavbarToggle}>
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
                    src={item.imgs}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.title}
                  </h3>
                  <div className="btn">
                    <h2 className="text-black title-font text-lg font-medium">
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
