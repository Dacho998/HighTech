import "./HomePage.css";
import hero from "../../assets/herroImg.png";


export const HomePage = () => {
 
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Брзо. Сигурно. Ефикасно.</h1>
          <p>
            Сервис за компјутери и лаптопи со кој можете да сметате. Поправка, надградба и оптимизација без компромис.</p>
          <div className="hero-buttons">
          </div>
        </div>
        <img src={hero} alt="Hero Image" className="hero-img" />
      </section>
    </>
  );
};
