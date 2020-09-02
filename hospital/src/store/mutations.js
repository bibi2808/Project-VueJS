export default {
  SET_SUBJECT: (state, subject) => {
    state.contacts.subject = subject;
  },
  SET_DATETIME: (state, datetime) => {
    state.contacts.datetime = datetime;
  },
  SET_INFORMATION: (state, { name, phone, email }) => {
    state.contacts.name = name;
    state.contacts.phone = phone;
    state.contacts.email = email;
  }
};
