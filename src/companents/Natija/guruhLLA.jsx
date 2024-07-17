// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

export const GuruhLLA = () => {
  ////// Loader/////////
  // const [loader, setLoader] = useState(false);
  // const captureRef = useRef(null);

  // const downloadPDF = () => {
  //   const capture = captureRef.current;
  //   setLoader(true);
  //   html2canvas(capture).then((canvas) => {
  //     const imgData = canvas.toDataURL('img/png');
  //     const doc = new jsPDF('landscape', 'pc', 'a4');
  //     const componentWidth = doc.internal.pageSize.getWidth();
  //     const componentHeight = doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, 'PNG', 0, 0, componentWidth , componentHeight);
  //     setLoader(false);
  //     doc.save('natija.pdf');

  //   })
  // }



  ///////loading///////
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Corrected spelling of false
    }, 2000);
  }, []);

  return (
    <div className="pdf">
      <button className="knopka">
        <Link to="/">
          <FaChevronLeft />
        </Link>
      </button>

      <div className="iframe_box" > 
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

{/* 
      <button onClick={downloadPDF} disabled={!(loader === false)}>
        {
          loader
            ? (<span>Yuklamoqda</span>)
            : (<span>Yuklab olish</span>)
        }
      </button> */}
      </div>
    </div >
  );
};
