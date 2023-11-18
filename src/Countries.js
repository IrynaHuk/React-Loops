import React from "react";

export default function Countries(props) {
  return (
    <div className="countries">
      {props.countriesList.map(function (country, index) {
        return (
          <li key={index}>
            The capital city of {country.name} is {country.capital}
          </li>
        );
      })}
    </div>
  );
}
