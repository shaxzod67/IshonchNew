import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Natija = () => {
  const items = [
    { title: "Kimyo", group: "Guruh LLA 1", link: "/guruhLLA" },
    { title: "Biologiya", group: "Guruh LLA 2", link: "/guruhLLA" },
    { title: "Tarix", group: "Guruh LLA 3", link: "/guruhLLA" },
    { title: "Matematika", group: "Guruh LLA 4", link: "/guruhLLA" },
    { title: "Biologiya", group: "Guruh LLA 5", link: "/guruhLLA" },
    { title: "Kimyo", group: "Guruh LLA 6", link: "/guruhLLA" },
    { title: "Tarix", group: "Guruh LLA 7", link: "/guruhLLA" },
    { title: "Matematika", group: "Guruh LLA 8", link: "/guruhLLA" },
  ];

  return (
    <div className="natija">
      <button className="knopka">
        <Link to="/">
          <FaChevronLeft />
        </Link>
      </button>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((item, index) => (
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
