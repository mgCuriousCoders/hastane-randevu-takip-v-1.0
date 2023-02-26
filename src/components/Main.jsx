import React, { useState } from "react";
import ahmet from "../assets/ahmet.png";
import Ayse from "../assets/Ayse.png";
import Fatma from "../assets/Fatma.png";
import Oya from "../assets/Oya.png";
// import data from "../helpers/data";

const Main = () => {
  const [hastalar, setHastalar] = useState([]);
  const [hastaDoktoru, setHastaDoktoru] = useState({ isDone: false, name: "" });

  const handleDoctor = (e) => {
    setHastaDoktoru({ isChosen: true, name: e.target.textContent });
  };

  // add element
  const handleSubmit = (e) => {
    e.preventDefault();
    let yeniHasta = {
      id: new Date().toString(),
      text: e.target[0].value,
      day: e.target[1].value,
      bittiMi: false,
      doktor: hastaDoktoru.name,
    };
    setHastalar([yeniHasta, ...hastalar]);
    e.target[0].value = "";
    e.target[1].value = "";
  };

  //remove element
  const handleDelete = (e) => {
    let yeniListe = hastalar;
    let id = e.target.closest(".hasta-card").getAttribute("id").toString();

    let index = yeniListe.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      yeniListe.splice(index, 1);
    }
    setHastalar([...yeniListe]);
  };

  const handleVisit = (e) => {
    let yeniListe = hastalar;
    let id = e.target.closest(".hasta-card").getAttribute("id").toString();
    const index = yeniListe.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updatedHasta = {
        ...yeniListe[index],
        bittiMi: !yeniListe[index].bittiMi,
      };
      const updatedHastalar = [
        ...yeniListe.slice(0, index),
        updatedHasta,
        ...yeniListe.slice(index + 1),
      ];
      setHastalar([...updatedHastalar]);
    }
  };

  return (
    <>
      <div>
        <h1 className="header_title">RANDEVU TAKIP PROGRAMI</h1>
      </div>
      {/* doktorlar */}
      <div>
        <div className="doctors">
          <div className="doctor-card">
            <img src={ahmet} alt="" width={200} />
            <h3 onClick={handleDoctor}>Dr Ahmet BİLEN</h3>
            <p>Sec</p>
          </div>
          <div className="doctor-card">
            <img src={Ayse} alt="" width={200} />
            <h3 onClick={handleDoctor}>Dr Ayse OKUR </h3>
            <p>Sec</p>
          </div>
          <div className="doctor-card">
            <img src={Fatma} alt="" width={200} />
            <h3 onClick={handleDoctor}>Dr Fatma ADİL</h3>
            <p>Sec</p>
          </div>
          <div className="doctor-card">
            <img src={Oya} alt="" width={200} />
            <h3 onClick={handleDoctor}>Dr Oya BASAR</h3>
            <p>Sec</p>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          Toplam Hasta Sayisi: {hastalar.length}
        </p>
      </div>

      {/* main */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {hastaDoktoru.isChosen && (
          <div
            style={{
              width: "50%",
              margin: "1rem",
              padding: "1rem",
              border: "1px solid black",
              textAlign: "center",
            }}
          >
            {/* form */}
            <form onSubmit={handleSubmit}>
              <label>Hasta Adi</label>
              <br />
              <input name="text" type="text" required />
              <br />
              <label>Day</label>
              <br />
              <input name="day" type="date" required />
              <br />
              <input
                className="submitButton"
                type="submit"
                value={`${hastaDoktoru.name} adina randevu olustur.`}
              />
            </form>
          </div>
        )}
        {/* hasta liste */}
        <div style={{ width: "50%" }}>
          {hastalar.map((item) => {
            return (
              <div
                className="hasta-card"
                key={item.id}
                id={item.id}
                onClick={handleVisit}
              >
                <div>
                  <p>{item.text}</p>
                  <p>{item.day}</p>
                  <p>{item.doktor}</p>
                </div>

                <div>
                  <p>
                    {item.bittiMi ? "Hasta ile ilgilenildi." : "Hasta bekliyor"}
                  </p>
                </div>
                <div>
                  <button
                    disabled={item.bittiMi ? false : true}
                    onClick={handleDelete}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
