import "./homePage.css";
import hero from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../services/card"
import { Card } from '../services/services';
import '../services/Services.css';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
   <section className="hero">
      <div className="hero-content">
        <h1>Брзо. Сигурно. Ефикасно.</h1>
        <p>
          Сервис за компјутери и лаптопи со кој можете да сметате. Поправка, надградба и оптимизација без компромис.
        </p>
        <div className="button">
          <button onClick={() => navigate("/Services")}>УСЛУГИ</button>
        </div>
      </div>
      <img src={hero} alt="Hero Image" className="hero-img" />
    </section>
      <section className="services-container">
        <div className="cards-wrapper">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};
