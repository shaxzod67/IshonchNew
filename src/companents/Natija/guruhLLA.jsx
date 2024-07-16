import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

export const GuruhLLA = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Corrected spelling of false
    }, 2000);
  }, []);

  return (
    <div>
      <button className="knopka">
        <Link to="/">
          <FaChevronLeft />
        </Link>
      </button>

      <div className="iframe_box">
        {
          loading ?
            <BarLoader className="loading"
              color={'#050A30'}
              loading={loading}
              size={150} />
            : <iframe
              className="iframe"
              src="https://script.google.com/macros/s/AKfycbxWT_IFiI4cTEtW5ig8iq-9QcUDiSqAjQ9aF14ZAHaJbLXGT-P9hmxMDMxtkqnPtUmf/exec"
            ></iframe>
        }
      </div>

    </div>
  );
};
