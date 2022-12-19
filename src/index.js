import "./index.css";
import ReactDOM from "react-dom";
import AppPersonalInfo from "./PersonalInfo";
import AppContacts from "./Contacts";
import AppExperience from "./Experience";

const personalInfo = document.querySelector("#appPersonalInfo");
ReactDOM.render(<AppPersonalInfo />, personalInfo);

const contacts = document.querySelector("#appContacts");
ReactDOM.render(<AppContacts />, contacts);

const experience = document.querySelector("#appExperience");
ReactDOM.render(<AppExperience />, experience);
