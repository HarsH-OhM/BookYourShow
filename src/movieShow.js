import React, { useEffect, useState } from "react";
import "./styles.css";
import InputForm from "./inputForm";
import Card from "./Components/Card";
import ShowContext from "./Components/showContext";

const show1Seats = {
  Platinum: [
    { name: "A1", value: true, price: 320 },
    { name: "A2", value: true, price: 320 },
    { name: "A3", value: true, price: 320 },
    { name: "A4", value: true, price: 320 },
    { name: "A5", value: true, price: 320 },
    { name: "A6", value: true, price: 320 },
    { name: "A7", value: true, price: 320 },
    { name: "A8", value: true, price: 320 },
    { name: "A9", value: true, price: 320 },
  ],

  Gold: [
    { name: "B1", value: true, price: 280 },
    { name: "B2", value: true, price: 280 },
    { name: "B3", value: true, price: 280 },
    { name: "B4", value: true, price: 280 },
    { name: "B5", value: true, price: 280 },
    { name: "B6", value: true, price: 280 },
    { name: "B7", value: false, price: 280 },
    { name: "B8", value: false, price: 280 },
    { name: "B9", value: false, price: 280 },
  ],
  Silver: [
    { name: "C1", value: false, price: 240 },
    { name: "C2", value: true, price: 240 },
    { name: "C3", value: true, price: 240 },
    { name: "C4", value: true, price: 240 },
    { name: "C5", value: true, price: 240 },
    { name: "C6", value: true, price: 240 },
    { name: "C7", value: true, price: 240 },
    { name: "C8", value: false, price: 240 },
    { name: "C9", value: false, price: 240 },
  ],
};

const show2Seats = {
  Platinum: [
    { name: "A1", value: true, price: 320 },
    { name: "A2", value: true, price: 320 },
    { name: "A3", value: true, price: 320 },
    { name: "A4", value: true, price: 320 },
    { name: "A5", value: true, price: 320 },
    { name: "A6", value: true, price: 320 },
    { name: "A7", value: true, price: 320 },
    { name: "A8", value: false, price: 320 },
    { name: "A9", value: false, price: 320 },
  ],

  Gold: [
    { name: "B1", value: false, price: 280 },
    { name: "B2", value: true, price: 280 },
    { name: "B3", value: true, price: 280 },
    { name: "B4", value: true, price: 280 },
    { name: "B5", value: true, price: 280 },
    { name: "B6", value: true, price: 280 },
    { name: "B7", value: false, price: 280 },
    { name: "B8", value: false, price: 280 },
    { name: "B9", value: false, price: 280 },
  ],
  Silver: [
    { name: "C1", value: true, price: 240 },
    { name: "C2", value: true, price: 240 },
    { name: "C3", value: true, price: 240 },
    { name: "C4", value: true, price: 240 },
    { name: "C5", value: true, price: 240 },
    { name: "C6", value: true, price: 240 },
    { name: "C7", value: true, price: 240 },
    { name: "C8", value: false, price: 240 },
    { name: "C9", value: false, price: 240 },
  ],
};

const show3Seats = {
  Platinum: [
    { name: "A1", value: true, price: 320 },
    { name: "A2", value: true, price: 320 },
    { name: "A3", value: true, price: 320 },
    { name: "A4", value: true, price: 320 },
    { name: "A5", value: true, price: 320 },
    { name: "A6", value: true, price: 320 },
    { name: "A7", value: true, price: 320 },
    { name: "A8", value: false, price: 320 },
    { name: "A9", value: false, price: 320 },
  ],

  Gold: [
    { name: "B1", value: true, price: 280 },
    { name: "B2", value: true, price: 280 },
    { name: "B3", value: true, price: 280 },
    { name: "B4", value: true, price: 280 },
    { name: "B5", value: true, price: 280 },
    { name: "B6", value: true, price: 280 },
    { name: "B7", value: true, price: 280 },
    { name: "B8", value: true, price: 280 },
    { name: "B9", value: false, price: 280 },
  ],
  Silver: [
    { name: "C1", value: true, price: 240 },
    { name: "C2", value: true, price: 240 },
    { name: "C3", value: true, price: 240 },
    { name: "C4", value: true, price: 240 },
    { name: "C5", value: true, price: 240 },
    { name: "C6", value: true, price: 240 },
    { name: "C7", value: true, price: 240 },
    { name: "C8", value: true, price: 240 },
    { name: "C9", value: true, price: 240 },
  ],
};
export default function MovieShow() {
  const [s1Data, setS1Data] = useState(show1Seats);
  const [s2Data, setS2Data] = useState(show2Seats);
  const [s3Data, setS3Data] = useState(show3Seats);

  useEffect(() => {
    setS1Data(s1Data);
    setS2Data(s2Data);
    setS3Data(s3Data);
  }, [s1Data, s2Data, s3Data]);

  return (
    <div className="mainParent">
      <div className="navBar">
        <h1 style={{}}>BookYourShow!</h1>

        {/* <ul className="navLinks">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
         
       
        </ul> */}

        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </div>

      <div className="mySkills">
        <div className="headTitle">
          <h1>Runnig Shows</h1>
        </div>
        <div className="techDiv">
          <Card
            cardHeading={"Show - 1(Audi - 1)"}
            movieName={"Shamshera"}
            showSeats={s1Data}
            isSeatsShow={true}
          />
          <Card
            cardHeading={"Show - 2(Audi - 2)"}
            movieName={"Bramhastra"}
            showSeats={s2Data}
            isSeatsShow={true}
          />
          <Card
            cardHeading={"Show - 3(Audi - 3)"}
            movieName={"Misson Imposible-22"}
            showSeats={s3Data}
            isSeatsShow={true}
          />
        </div>
      </div>

      <div className="mySkills">
        <div>
          <h1>Book Movie Show </h1>
        </div>
        <Card
          isSimpleContent={true}
          content={
            <ShowContext.Provider
              value={{
                s1Data,
                setS1Data,
                s2Data,
                setS2Data,
                s3Data,
                setS3Data,
              }}
            >
              <InputForm
              // show1Seats={show1Seats}
              // show2Seats={show2Seats}
              // show3Seats={show3Seats}
              />
            </ShowContext.Provider>
          }
        />
      </div>
    </div>
  );
}
