import React from "react";

const Zamowienie = () => {
  return (
    <section className="zamowienie">
      <h1>Zamówienie</h1>
      <form action="/zamowienie" method="post">
        <fieldset data-nazwa="zupa pomidorowa0" data-ilosc="1" data-cena="10">
          <legend>Pozycje:</legend>
          <section class="danie">
            <h1>Zupa pomidorowa</h1>
            <h2>cena: 10 pln</h2>
            <h3>ilość: 1</h3>
          </section>
          <section class="danie">
            <h1>Zupa ogórkowa</h1>
            <h2>cena: 10 pln</h2>
            <h3>ilość: 2</h3>
          </section>
        </fieldset>
        <fieldset>
          <legend>Podsumowanie:</legend>
          <section class="podsumowanie">
            <h1>Do zapłaty: 20 pln</h1>
          </section>
        </fieldset>
        <fieldset>
          <legend>Odbiór:</legend>
          <input type="date" />
          <input type="time" />
        </fieldset>
        <button type="submit">Zamów</button>
      </form>
    </section>
  );
};
export default Zamowienie;
