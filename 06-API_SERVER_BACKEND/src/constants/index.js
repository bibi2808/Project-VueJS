const PAGE_SIZE = 3;
const CURRENT_PAGE = 1;

const CONFIG_ACCESS_TOKEN = "ACCESS_TOKEN";
const EMAIL_OR_PASSWORD_IS_WRONG = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Email or Password is invalid!"
};

const PASSWORD_IS_SHORT = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Password is too short"
};

export {
  PAGE_SIZE,
  CURRENT_PAGE,
  CONFIG_ACCESS_TOKEN,
  EMAIL_OR_PASSWORD_IS_WRONG,
  PASSWORD_IS_SHORT
};
