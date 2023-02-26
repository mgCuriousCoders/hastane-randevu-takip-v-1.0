import React, { useState } from "react";
import ahmet from "../assets/ahmet.png";
import Ayse from "../assets/Ayse.png";
import Fatma from "../assets/Fatma.png";
import Oya from "../assets/Oya.png";
import data from "../helpers/data";

const Doktorlar = () => {
  const [hastalar, setHastalar] = useState(data);
  const [hastaDoktoru, setHastaDoktoru] = useState({ isDone: false, name: "" });

  const handleDoctor = (e) => {
    setHastaDoktoru({ isChosen: true, name: e.target.textContent });
  };

  // set form
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
    let id = e.target.closest(".hasta-card").getAttribute("id");

    let index = yeniListe.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      yeniListe.splice(index, 1);
    }
    setHastalar([...yeniListe]);
  };

  const handleVisit = (e) => {
    let yeniListe = hastalar;
    let id = e.target.closest(".hasta-card").getAttribute("id");
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
      <div className="header">
        <h1 className="header_title">RANDEVU TAKIP PROGRAMI</h1>
      </div>
      {/* doktorlar */}
      <div>
        <div className="doctors">
          <div className="doctor-card">
            <img src={ahmet} alt="{ahmet}" width={200} />
            <h3 onClick={handleDoctor}>Dr Ahmet BİLEN</h3>
            <p>Yeni Randevu Icin Doktor Seciniz</p>
          </div>
          <div className="doctor-card">
            <img src={Ayse} alt="" width={200} />
            <h3 onClick={handleDoctor}>Dr Ayse OKUR </h3>
            <p>Yeni Randevu Icin Doktor Seciniz</p>
          </div>
          <div className="doctor-card">
            <img src={Fatma} alt="" width={200} />
            <h3 onClick={handleDoctor}>Dr Fatma ADİL</h3>
            <p>Yeni Randevu Icin Doktor Seciniz</p>
          </div>
          <div className="doctor-card">
            <img src={Oya} alt="" width={200} />
            <h3 onClick={handleDoctor}>Dr Oya BASAR</h3>
            <p>Yeni Randevu Icin Doktor Seciniz</p>
          </div>
        </div>
      </div>

      {/* main */}
      <div style={{ display: "flex" }}>
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
          {hastaDoktoru.isChosen && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="hasta-adi">Hasta Adi</label>
              <input name="text" type="text" id="hasta-adi" required />
              <label htmlFor="gun">Gun</label>
              <input name="day" type="date" id="gun" required />
              <input
                className="submitButton"
                type="submit"
                value={`${hastaDoktoru.name} adina randevu olustur.`}
              />
            </form>
          )}
        </div>
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
                  <p>Hasta Adi: {item.text}</p>
                  <p>Tarih: {item.day}</p>
                  <p>Doktoru: {item.doktor}</p>
                </div>

                <div>
                  <p className="durum">
                    Durumu:{" "}
                    {item.bittiMi ? (
                      <span>Hasta ile ilgilenildi</span>
                    ) : (
                      "Hasta bekliyor"
                    )}
                  </p>
                </div>
                <div>
                  <button
                    disabled={item.bittiMi ? false : true}
                    onClick={handleDelete}
                  >
                    X
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

export default Doktorlar;
