import React from "react";

import "./Card.scss";
import { Link } from "react-router-dom";

import dots from "../../assets/more.png";
import share from "../../assets/upload.png";
import { PIN_ROUTE } from "../../router/constants";
import MyButton from "../MyButton/MyButton";

interface ICard {
  title?: string;
  img: string;
  alt?: string;
}

const Card = ({ title, img, alt }: ICard) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content__top-button">
          <MyButton>Сохранить</MyButton>
        </div>
        <Link className="card-content__image" to={PIN_ROUTE}>
          <img src={img} alt={alt} />
        </Link>
        <div className="card-content__bottom-button">
          <MyButton>
            <img src={share} alt="share" />
          </MyButton>
          <MyButton>
            <img src={dots} alt="more" />
          </MyButton>
        </div>
      </div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;