import { SUBJECT_CONFIG } from "../config/const";
let subject = localStorage.getItem("subject");
let date = localStorage.getItem("date");
let name = localStorage.getItem("name");
let phone = localStorage.getItem("phone");
let email = localStorage.getItem("email");

export default {
  contacts: {
    name: name,
    phone: phone,
    email: email,
    datetime: date,
    subject: subject
  },
  listOptions: SUBJECT_CONFIG
};
