import { Link } from "react-router-dom";
import { ButtonAddCart } from "./button_add_card";
import { StuffedStar, EmptyStar } from "../common/svg";

let starts_testing = 5;

type Props_Card_Product = {
  name: string;
  description: string;
  views: string;
  link_img: string;
  stars: number;
  price: string;
};

const LENGHT = 70;

export function CardProduct(props: Props_Card_Product) {
  const formaString = (text: string, maxLength: number) => {
    if (text.length > maxLength) return `${text.substring(0, maxLength)} ...`;
    else return text;
  };

  return (
    <div className="card">
      <Link to={`/product`}>
        <img
          src={props.link_img === "NONE" ? "img/product.webp" : props.link_img}
          alt=""
          className="card__product__img"
        />
      </Link>
      <div className="card__product__container__text">
        <div className="card__product__title__container">
          <h1 className="card__product__name">{props.name}</h1>
          <div className="card__product__container__price">
            <span className="card__product__money__key">$</span>
            <span className="card__product__money__price">
              {parseCurrency(props.price).value}
            </span>
            <span className="card__product__money__cents">.00</span>
          </div>
        </div>
        <h4 className="card__product__description">
          {formaString(props.description, LENGHT)}
        </h4>
      </div>
      <div className="card__product__level__of__preference">
        {getStars(Math.floor(props.stars))} ({props.views})
      </div>
      <ButtonAddCart />
    </div>
  );
}

function getStars(num: number) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(
      <StuffedStar
        width="10px"
        height="10px"
        color="#F4D03F"
        class="card__product__start__stuffed"
        key={`card__product__start__stuffed__${i}`}
      />
    );
  }
  for (let i = 0; i < 5 - num; i++) {
    result.push(
      <EmptyStar
        width="10px"
        height="10px"
        color="#F4D03F"
        class="card__product__start__empty"
        key={`card__product__start__empty__${i}`}
      />
    );
  }
  return result;
}

function parseCurrency(text: string) {
  const regex = /(\d+)\s(\b[a-zA-Z]+\b)/;
  const match = regex.exec(text);
  if (!match) {
    throw new Error(`Unable to parse currency from text: ${text}`);
  }
  const value = Number(match[1]);
  const denomination = match[2];
  return { value, denomination };
}
