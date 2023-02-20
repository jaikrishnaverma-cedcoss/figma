import React from "react";
import BottomNav from "./BottomNav";
import SpringSection from "./SpringSection";
import TopNav from "./TopNav";
import TrandingNow from "./TrandingNow";

const Main = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="announcement wrapper">
            <p className="announcement__p">
              20% Off! Code: SPRING21 - Terms apply*
            </p>
          </div>
          <nav className="nav">
            <div className="topnav">
              <TopNav />
            </div>
            <div className="bottomnav">
              <BottomNav />
            </div>
          </nav>
          <section className="hero">
            <img src="XL.png" className="wrapper" alt="" />
          </section>
        </header>
        <main>
          <section className="tranding">
            <TrandingNow title="TRANDING NOW" />
          </section>
          <section className="spring">
            <SpringSection />
          </section>
          <section className="recomended">
            <TrandingNow title="RECOMMENDED FOR YOU" />
          </section>
          <section className="advertisment">
            <div className="advertisment__box advertisment__box--left">
              <div className="content__box">
                <p className="content__title">It’s all about you</p>
                <p className="content__desc">
                  Try now, pay later. We want that you’re really confident and
                  happy with your purchase - you have 30 days before we charge
                  you! Learn more about our policy.
                </p>
                <p className="content__icon">
                  <i className="bi bi-arrow-right-square"></i>
                </p>
              </div>
            </div>
            <img
              src="Frame 124.png"
              className="advertisment__box advertisment__box--right"
            ></img>
          </section>
          <section className="new">
            <TrandingNow title="NEW IN... ACCESORIES" />
          </section>
        </main>
        <footer>
          <div className="footertop">
            {["FOOTER1", "FOOTER2", "FOOTER3", "FOOTER4"].map((x, i) => (
              <div>
                <h5>{x}</h5>
                <p>Item</p>
                <p>Item</p>
                <p>Item</p>
              </div>
            ))}
          </div>
          <div className="footerbottom">
            <img src="Subtract.png" alt="" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
