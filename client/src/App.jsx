import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Routes } from "react-router";

import Market from "./components/pages/Market";
import About from "./components/pages/About";
import Show from "./components/Show";

const history = createBrowserHistory();

const Home = () => {
  return (
    <>
      <Welcome />
      <Services />
      <Transactions />
    </>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />

        <Routes history={history}>
          <Route path="/market" element={<Market />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />

          <Route path="/market/:id" element={<Show />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
