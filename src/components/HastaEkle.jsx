import React from "react";
import { useState } from "react";

const HastaEkle = (props) => {
  const [hastaForm, setHastaForm] = useState({});
  console.log(props);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHastaForm({
      text: e.target[0].value,
      day: e.target[1].value,
      bittiMi: false,
      doktor: props.doktor,
    });
    console.log(hastaForm);

    e.target[0].value = "";
    e.target[1].value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Hasta Adi</label>

      <input name="text" type="text" />

      <label>Day</label>

      <input name="day" type="date" />

      <input className="submitButton" type="submit" value="kayit oluştur" />
    </form>
  );
};

export default HastaEkle;
