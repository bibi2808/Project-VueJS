const PAGE_SIZE = 3;
const CURRENT_PAGE = 1;

const EMAIL_OR_PASSWORD_IS_WRONG = {
  group: "error",
  type: "error",
  duration: 3000,
  speed: 1000,
  title: "Important message",
  text: "Email or Password is invalid !"
};

export { PAGE_SIZE, CURRENT_PAGE, EMAIL_OR_PASSWORD_IS_WRONG };
