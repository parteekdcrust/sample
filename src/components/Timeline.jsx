import React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="over">
      <div className="text-[#fff">
        <h1 className="para_para text-center text-[white]">
          Progressive Roadmap
        </h1>
        <div className="pb-[270px] pt-[180px]">
          <div className="timeHR relative">
            <div className="dotpoint flex justify-around">
              <div className="dot green">
                <div className="card_a">
                  <ul className="text-[white]">
                    <li>Concept Evolution</li>
                    <li>Market Research</li>
                    <li>Strategic Planning</li>
                  </ul>
                </div>
                <div className="up-a">
                  <img className="" src="./images/up-arrow.png" alt="" />
                </div>
              </div>
              <div className="dot">
                <div className="card_b">
                  <ul className="text-[white]">
                    <li>Founder Stream</li>
                    <li>Business Plan</li>
                    <li>Team Development</li>
                  </ul>
                </div>
                <div className="up-b">
                  <img className="" src="./images/arrow-down.png" alt="" />
                </div>
              </div>
              <div className="dot">
                <div className="card_a">
                  <ul className="text-[white]">
                    <li>Dubai Legal Incorporation</li>
                    <li>SRI Token</li>
                    <li>Smart Contract on Polygon</li>
                  </ul>
                </div>
                <div className="up-a">
                  <img className="" src="./images/up-arrow.png" alt="" />
                </div>
              </div>
              <div className="dot">
                <div className="card_b">
                  <ul className="text-[white]">
                    <li>White Paper</li>
                    <li>Soft Launch</li>
                    <li>Node Private SaleStart</li>
                    <li>Beta 1.0 Web and App Start</li>
                    <li>Exchange Listing</li>
                    <li>SRI Trade</li>
                  </ul>
                </div>
                <div className="up-b">
                  <img className="" src="./images/arrow-down.png" alt="" />
                </div>
              </div>
              <div className="dot">
                <div className="card_a">
                  <ul className="text-[white]">
                    <li>Trade Start with Coinstore Exchange</li>
                    <li>SRI Swap Launching</li>
                    <li>SRI Pay Crypto Wallet Will Launch</li>
                    <li>SRI Deals</li>
                    <li>2nd SRI Expo Event @Dubai</li>
                  </ul>
                </div>
                <div className="up-a">
                  <img className="" src="./images/up-arrow.png" alt="" />
                </div>
              </div>
              <div className="dot">
                <div className="card_b">
                  <ul className="text-[white]">
                    <li>Listing in Top C-EX</li>
                    <li>Pairing Contracts</li>
                    <li>SRI SHOP</li>
                    <li>Launch SRI TRADEX</li>
                    <li>Launch SRI CHAIN</li>
                  </ul>
                </div>
                <div className="up-b">
                  <img className="" src="./images/arrow-down.png" alt="" />
                </div>
              </div>
            </div>
            <div className="leftarrow">
              <img className="" src="./images/left-arrow.png" alt="" />
            </div>
            <div className="rightarrow">
              <img className="" src="./images/arrow-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
