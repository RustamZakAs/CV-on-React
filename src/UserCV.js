import React, { Component } from "react";
import AppPersonalInfo from "./PersonalInfo";
import AppContacts from "./Contacts";
import AppExperience from "./Experience";

class AppUserCV extends Component {
    render() {
      return (
        <>
            <div id="leftPanel">
                <div id="appPersonalInfo"><AppPersonalInfo /></div>
                <div id="appContacts"><AppContacts /></div>
            </div>
            <div id="main">
                <div id="appExperience"><AppExperience /></div>
            </div>
        </>
      );
    }
  }
  

export default AppUserCV;