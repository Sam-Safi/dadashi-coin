import React from "react";
import NumberFormat from "react-number-format";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <NumberFormat
                value={data.market_cap}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              ></NumberFormat>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <NumberFormat
                value={data.total_supply}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              ></NumberFormat>
              <span></span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume(24H)</span>
              <NumberFormat
                value={data.total_volume}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              ></NumberFormat>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">high 24h</span>
              <NumberFormat
                value={data.high_24h}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              ></NumberFormat>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Circulating Supply
              </span>
              <NumberFormat
                value={data.circulating_supply}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              ></NumberFormat>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">low 24h</span>
              <NumberFormat
                value={data.low_24h}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              ></NumberFormat>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
