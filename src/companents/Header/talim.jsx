import React from "react";

function Talim() {
  return (
    <div className="talim">
      <h1>
        TA'LIMGA <br /> TIZIMLI YONDASHUV
      </h1>
      <div className="talimBox">
        <div className="talim_box">
          <h2>O’zingizga mos kursni tanlash</h2>
          <p>
            Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar
            bo'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.
          </p>
          <img
            src="https://online.pdp.uz/assets/newPdp/edu-images/edu7.svg"
            alt=""
          />
        </div>

        <div className="talim_box">
          <h2>O’quv jarayoni</h2>
          <p>
            O'quv jarayoni video darslar, amaliy mashqlar, mentor bilan ishlash
            imkoniyati hamda live meetinglar orqali olib boriladi.
          </p>
          <img
            src="https://online.pdp.uz/assets/newPdp/edu-images/edu8.svg"
            alt=""
          />
        </div>


        <div className="talim_box">
          <h2>Sertifikat bilan taqdirlash</h2>
          <p>
          Kurs so'nggida talabaning o'zlashtirish ko'rsatkichlari e'tiborga olingan holda sertifikat va diplom beriladi.
          </p>
          <img
            src="https://online.pdp.uz/assets/newPdp/edu-images/edu9.svg"
            alt=""
          />
        </div>


      </div>
    </div>
  );
}

export default Talim;
