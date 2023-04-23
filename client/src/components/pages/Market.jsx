import React from "react";
import homeStore from "../stores/homeStore";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./Market.scss";
import ListItem from "../ListItem";
import classNames from "classnames";

const Market = () => {
  const store = homeStore();
  React.useEffect(() => {
    if (store.trending.length === 0) store.fetchCoins();
  }, []);
  return (
    <div className="market-styles">
      <Header />

      <header className="p-5 text-center justify-start items-center">
        <div className="text-white">
          <h2>Search for a coin</h2>

          <div className="grid grid-cols-2">
            <div className="col-span-2">
              <input
                className="mx-auto md:w-1/2 lg:w-1/2 rounded-md justify-start text-left text-black"
                type="text"
                value={store.query}
                onChange={store.setQuery}
                placeholder="e.g. bitcoin"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width mx-auto">
          <h2>{store.searched ? "Search Results" : "Trending coins"}</h2>

          {store.searching ? (
            <div className="svg-big">
              <div
                className={classNames("home-search-input", {
                  searching: store.searching,
                })}
              >
                <svg
                  className=" fill-white mx-auto w-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20px"
                >
                  <path
                    fill="currentColor"
                    d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="home-cryptos-list lg:w-1/2 mx-auto">
              {store.coins.map((coin) => {
                return <ListItem key={coin.id} coin={coin} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
