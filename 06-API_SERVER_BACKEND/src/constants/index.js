const PAGE_SIZE = 10;
const CURRENT_PAGE = 1;

const CONFIG_ACCESS_TOKEN = "ACCESS_TOKEN";
const EMAIL_OR_PASSWORD_IS_WRONG = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Email or Password is invalid !"
};

const PASSWORD_IS_SHORT = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Password is too short !"
};

const NEWPASSWORD_AND_OLDPASSWORD_DOES_NOT_MATCH = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Old password does not match with the New password !"
};

const NEWPASSWORD_DOES_NOT_MATCH = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "New password does not match !"
};

const ENTER_FULL_INFORMATION = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Please fill full information !"
};

const SEARCH_INFORMATION = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Please enter infomation to search !"
};

const INFORMATION_IS_NOT_CORRECT = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Information is not correctly !"
};

const REGISTER_FAILED = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Register has failed !"
};

const TYPE_OF_FILE_WRONG = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Type of file was wrong !"
};

const REGISTER_SUCCESS = {
  group: "error",
  type: "success",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Register has success !"
};

const COMMENT_SUCCESS = {
  group: "error",
  type: "success",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Posted comment is successfully !"
};

const CHANG_PASSWORD_SUCCESS = {
  group: "error",
  type: "success",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "changed password success !"
};

const UPLOAD_SUCCESS = {
  group: "error",
  type: "success",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Upload is successfully !"
};

const UPLOAD_FAILED = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Upload is failed !"
};

export {
  PAGE_SIZE,
  CURRENT_PAGE,
  CONFIG_ACCESS_TOKEN,
  EMAIL_OR_PASSWORD_IS_WRONG,
  PASSWORD_IS_SHORT,
  NEWPASSWORD_AND_OLDPASSWORD_DOES_NOT_MATCH,
  NEWPASSWORD_DOES_NOT_MATCH,
  ENTER_FULL_INFORMATION,
  SEARCH_INFORMATION,
  INFORMATION_IS_NOT_CORRECT,
  REGISTER_FAILED,
  TYPE_OF_FILE_WRONG,
  COMMENT_SUCCESS,
  CHANG_PASSWORD_SUCCESS,
  REGISTER_SUCCESS,
  UPLOAD_SUCCESS,
  UPLOAD_FAILED
};
