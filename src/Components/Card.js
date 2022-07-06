import React, { useState } from "react";
import Modal from "./Modal";
import "../styles.css";

export default function Card(props) {
  return (
    <>
      <div className="aboutCard">
        <h1>{props.cardHeading}</h1>
        <h2>{props.movieName}</h2>

        <>
          {/* <div className="imgCard"> */}
          {props.isSeatsShow && (
            <div className="seatsContainer">
              <div className="seatsRow">
                {props.showSeats.Platinum.map((el) => {
                  return (
                    <>
                      <span
                        className="seats"
                        style={{
                          border: "3px solid black",
                          backgroundColor: el.value ? "green" : "red",
                        }}
                        key={el.name}
                      >
                        {el.name}
                      </span>
                    </>
                  );
                })}
              </div>
              <div className="seatsRow">
                {props.showSeats.Gold.map((el) => {
                  return (
                    <>
                      <span
                        className="seats"
                        style={{
                          border: "3px solid gold",
                          backgroundColor: el.value ? "green" : "red",
                        }}
                        key={el.name}
                      >
                        {el.name}
                      </span>
                    </>
                  );
                })}
              </div>
              <div className="seatsRow">
                {/* <h3 style={{ display: "block" }}>Silver</h3>
              <br /> */}
                {props.showSeats.Silver.map((el) => {
                  return (
                    <>
                      <span
                        className="seats"
                        style={{
                          border: "3px solid silver",
                          backgroundColor: el.value ? "green" : "red",
                        }}
                        key={el.name}
                      >
                        {el.name}
                      </span>
                    </>
                  );
                })}
              </div>
            </div>
          )}
          {/* <button onClick={Toggle}>View More</button> */}
          {/* </div> */}
          {props.isSimpleContent && <>{props.content}</>}
        </>
      </div>
    </>
  );
}
