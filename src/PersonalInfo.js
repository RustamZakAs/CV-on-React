import React, { Component } from "react";

class AppPersonalInfo extends Component {
  render() {
    return (
      <>
        <h2>Rustam Zak As</h2>
        <img
          src="https://media.licdn.com/dms/image/C5603AQGWuDQ8vH4wvw/profile-displayphoto-shrink_800_800/0/1517799567062?e=1678924800&v=beta&t=Hg7VaKXFPJxpCNs31XnzKcHNEeEscY4Q7yBi7FXkUsA"
          alt="Rustam Zak As"
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
