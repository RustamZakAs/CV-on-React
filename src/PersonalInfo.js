import React, { Component } from "react";

class AppPersonalInfo extends Component {
  render() {
    return (
      <>
        <h2>Rustam Zak As</h2>
        <img
          src="https://media.licdn.com/dms/image/D4D35AQHgozrY5xh4BQ/profile-framedphoto-shrink_200_200/0/1661245385821?e=1672038000&v=beta&t=vVLglU-qN66mChJEogA30tqtxhbomvQ9XS4TgdNbRQQ"
          alt=""
        />
        <div className="toLeft">
          <p id="name">имя</p>
          <p id="age">возраст</p>
          <p id="place">место жительства</p>
        </div>
      </>
    );
  }
}

export default AppPersonalInfo;
