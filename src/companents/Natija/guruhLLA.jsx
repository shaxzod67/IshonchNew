import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const GuruhLLA = () => {
  return (
    <div>
      <button className="knopka">
        <Link to="/">
          <FaChevronLeft />
        </Link>
      </button>
      <iframe className="iframe" src="https://script.google.com/macros/s/AKfycbxWT_IFiI4cTEtW5ig8iq-9QcUDiSqAjQ9aF14ZAHaJbLXGT-P9hmxMDMxtkqnPtUmf/exec" frameborder="0"></iframe>
    </div>
  )
};
