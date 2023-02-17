import React from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";
import TrandingNow from "./TrandingNow";

const Main = () => {
  return (
    <>
      <header className="header">
      <div className="announcement wrapper">
        <p className="announcement__p">40% off</p>
      </div>
        <nav className="nav">
            <div className="topnav">
                <TopNav/>
            </div>
            <div className="bottomnav">
                <BottomNav/>
            </div>
        </nav>
        <section className="hero">
            <img src="XL.png" className="wrapper" alt="" />
        </section>
      </header>
      <main>
        <section className="tranding">
            <TrandingNow/>
        </section>
        <section className="spring"></section>
        <section className="recomended"></section>
        <section className="advertisment"></section>
        <section className="new"></section>
      </main>
      <footer>
        <div className="footertop"></div>
        <div className="footerbottom"></div>
      </footer>
    </>
  );
};

export default Main;
