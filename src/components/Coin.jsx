import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        <NumberFormat
          className="text-decoration-none"
          value={coin.current_price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        ></NumberFormat>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {coin.price_change_percentage_24h}
        </span>
        <i
          onClick={e => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="delete-icon far fa-times-circle text-danger"
        ></i>
      </li>
    </Link>
  );
};

export default Coin;
