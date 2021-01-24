import React from "react";
import { message } from "antd";

const Logowanie = () => {
  let handleSubmit = async e => {
    e.preventDefault();

    const oferta = await fetch(
      "https://react-dopzarcia-si-ipvvm5.stackblitz.io/api/oferta.json"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        message.success("success");
      })
      .catch(error => {
        message.error("error");
      });

    /*
    const formData = new FormData(e.target);
    formData.append("hash", "asdasd");

    localStorage.setItem("login", formData.get("login"));
    localStorage.setItem("password", formData.get("password"));

    console.log(formData.get("login"));
    console.log(formData.get("password"));
    console.log(localStorage.getItem("login"));
    console.log(localStorage.getItem("password"));*/
  };

  return (
    <form
      id="formularz-logowania"
      className="logowanie"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Logowanie:</legend>
        <label>Login:</label>
        <input id="login" type="text" name="login" />
        <label>Hasło:</label>
        <input id="password" type="password" name="password" />
      </fieldset>
      <input id="submit" type="submit" value="zaloguj" />
    </form>
  );
};

export default Logowanie;

