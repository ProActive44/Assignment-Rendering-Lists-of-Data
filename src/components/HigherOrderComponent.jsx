import React, { Component } from "react";
import "./HigherOrderComponent.css";

export default class HigherOrderComponent extends Component {
  // PROGRESSION 1 | DEFINE THE STATE
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  render() {
    let data = this.state.userData;
    return (
      <div>
        {/* PROGRESSION 2 | LIST ALL ITEMS */}
        <div>
          <h1>Display all items</h1>
          <div className="UserItems">
            {data.map((user) => {
              return (
                <div key={user.id}>
                  <p>Id: {user.id}</p>
                  <p>Name: {user.name}</p>
                  <p>User Type: {user.user_type}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE */}
        <div>
          <h1>Display based on user type</h1>
          <div className="UserItems">
            {data
              .filter((user) => {
                return user.user_type == "Designer";
              })
              .map((user) => {
                return (
                  <div key={user.id}>
                    <p>Id: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>User Type: {user.user_type}</p>
                  </div>
                );
              })}
          </div>
        </div>
        {/* PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J */}
        <div>
          <h1>Filter all data starting with J</h1>
          <div className="UserItems">
            {data
              .filter((user) => {
                return user.name[0] == "J";
              })
              .map((user) => {
                return (
                  <div key={user.id}>
                    <p>Id: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>User Type: {user.user_type}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* PROGRESSION 5 | FILTER DATA BASED ON AGE */}
        <div>
          <h1>
            Filter all data based on age greater than 28 and less than or equal
            to 50
          </h1>
          <div className="UserItems">
            {data
              .filter((user) => {
                return user.age > 28 && user.age <= 50;
              })
              .map((user) => {
                return (
                  <div key={user.id}>
                    <p>Id: {user.id}</p>
                    <p>Name: {user.name}</p>
                    <p>User Type: {user.user_type}</p>
                  </div>
                );
              })}
          </div>
        </div>

        {/* PROGRESSION 6 | FIND THE TOTAL EXPERIENCE OF THE DESIGNERS  */}
        <div>
          <h1>Filter the total years of the designers</h1>
          <div className="UserItems">
            {data
              .filter((user) => {
                return user.user_type == "Designer";
              })
              .reduce((acc, curr) => {
                return acc + curr.years;
              }, 0)}
          </div>
        </div>
      </div>
    );
  }
}
