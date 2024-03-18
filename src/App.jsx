import "./App.scss";

import { useState, useEffect } from "react";

import mentor from "./assets/mentor.png";

import Header from "./components/Header";
import Button from "./components/Button/Button";
import Sidepanel from "./components/Sidepanel/Sidepanel";

function App() {
  const [opened, setOpened] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [percent, setPercent] = useState(0);

  const getApiData = async () => {
    const response = await fetch(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    ).then((response) => response.json());

    setPercent(response["Valute"]["GBP"]["Value"].toFixed());
  };

  const getCurrentDate = async () => {
    let currentDate = new Date();
    const day = currentDate.getDate().toString();
    const month = (currentDate.getMonth() + 1).toString();
    const year = currentDate.getFullYear().toString();

    let sum = 0;
    for (let digit of day + month + year) {
      sum += parseInt(digit, 10);
    }

    setQuantity(sum);
  };

  useEffect(() => {
    getApiData();
    getCurrentDate();
  }, []);

  return (
    <>
      {opened && <Sidepanel onClick={() => setOpened(false)} />}
      <div className="container">
        <Header />
        <div className="content">
          <h1 className="title">
            СОЗДАЮ УСЛОВИЯ <br /> ДЛЯ ВАШЕГО УСПЕХА
          </h1>
          <p className="about">
            Когда ваше время и энергия лучше сфокусированы, стремление к новым
            <br />
            возможностям становится реальностью, ваш успех зависит от ваших
            действий
          </p>

          <p className="about_xs">Ваш успех зависит от ваших действий</p>

          <div className="buttons">
            <Button
              className="btn_record"
              type="solid"
              text="Записаться на консультацию"
              onClick={() => setOpened(true)}
            />
            <Button
              className="btn_consultation"
              type="transparent"
              text="Бесплатная консультация"
              onClick={() => setOpened(true)}
            />

            <Button
              className="btn_record_xs"
              type="solid"
              text="Записаться"
              onClick={() => setOpened(true)}
            />
            <Button
              className="btn_consultation_xs"
              type="transparent"
              text="Заказать звонок"
              onClick={() => setOpened(true)}
            />
          </div>
          <div className="performance">
            <div className="item">
              <h2 className="title">{quantity}+</h2>
              <p className="subtitle">
                техник для <br /> достижения целей
              </p>
            </div>
            <div className="item">
              <h2 className="title">{percent}%</h2>
              <p className="subtitle">
                увеличение личной
                <br />
                продуктивности
              </p>
            </div>
          </div>
          <img className="mentor" src={mentor} alt="Mentor Photo" />
          <div className="performance_xs">
            <div className="item">
              <h2 className="title">{quantity}+</h2>
              <p className="subtitle">техник</p>
            </div>
            <div className="item">
              <h2 className="title">{percent}%</h2>
              <p className="subtitle">продуктивности</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
