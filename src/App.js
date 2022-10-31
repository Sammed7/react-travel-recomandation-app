import React from "react";
import { useState } from "react";
import "./styles.css";

const travelDirectory = {
  Beaches: [
    {
      name: "Goa",
      rating: "5/5"
    },
    {
      name: "Ganpatipule",
      rating: "4.9/5"
    },
    {
      name: "Gokarn",
      rating: "4.7/5"
    },
    {
      name: "guhagar",
      rating: "4.6/5"
    },
    {
      name: "ratnagiri",
      rating: "4.4/5"
    }
  ],

  Waterfalls: [
    {
      name: "Dudhsagar waterfall",
      rating: "5/5"
    },
    {
      name: "devkund-pune",
      rating: "5/5"
    },
    {
      name: "Gokak falls",
      rating: "4.2/5"
    },
    {
      name: "milky-bar waterfall",
      rating: "4.8/5"
    }
  ],
  Forts: [
    {
      name: "Raygad fort",
      rating: "4.5/5"
    },
    {
      name: "Pratapgad fort",
      rating: "4.6/5"
    },
    {
      name: "sinhgad fort",
      rating: "4.7/5"
    },
    {
      name: "Shivneri fort",
      rating: "4.6/5"
    },
    {
      name: "Panhala fort",
      rating: "4.6/5"
    }
  ]
};

var allLocations = Object.keys(travelDirectory);

export default function App() {
  const [recommend, setrecommend] = useState("Beaches");
  var travelList = travelDirectory[recommend];
  function travelClickHandler(travel) {
    setrecommend(travel);
  }
  return (
    <div
      className="App"
      style={{
        color: "white",
        backgroundColor: "#fb7185",
        maxHeight: "auto",
        padding: "2px"
      }}
    >
      <h1>Travel Recommendation App</h1>

      <div>
        {allLocations.map((travel) => (
          <button
            className="travelButtons"
            onClick={() => travelClickHandler(travel)}
            style={{
              outline: "none",
              border: "1px solid black",
              margin: "2rem 1rem 1rem 1rem",
              padding: "1rem 2rem",
              borderRadius: "10px",
              fontSize: "large",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {travel}
          </button>
        ))}
      </div>
      <hr
        style={{
          color: "solid black",
          margin: "2rem"
        }}
      ></hr>
      <div
        style={{
          textAlign: "left"
        }}
      >
        <ul
          style={
            {
              // padding: "0"
            }
          }
        >
          {travelList.map((place) => (
            <li
              key={place.name}
              style={{
                margin: "1rem 0.5rem",
                padding: "1rem",
                listStyle: "none",
                border: "1px solid black",
                color: "black",
                borderRadius: "10px",
                width: "50%"
              }}
            >
              <div style={{ fontSize: "larger" }}> {place.name} </div>
              <div style={{ fontSize: "smaller" }}> {place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
