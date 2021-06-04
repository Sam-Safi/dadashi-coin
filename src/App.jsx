import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";

import { WatchListContextProvider } from "./context/watchListContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" component={CoinSummaryPage} />
            <Route path="/coins/:id" component={CoinDetailPage} />
          </Switch>
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
