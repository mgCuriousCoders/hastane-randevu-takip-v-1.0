import React from "react";

const HastaListe = (data) => {
  const { hastalar } = data;
  console.log("hastaliste", hastalar);

  return (
    <div style={{ width: "50%" }}>
      {hastalar.map((item, key) => {
        return (
          <div className="hasta-card" key={item.id}>
            <div>
              <p>{item.text}</p>
              <p>{item.day}</p>
              <p>{item.doktor}</p>
            </div>

            <div>
              <p>{item.bittiMi ? "Hasta ile ilgilenildi." : ""}</p>
            </div>
            <div>
              <button>x</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HastaListe;
