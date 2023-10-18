import { atom } from "recoil";

const langState = atom({
  key: "langState", // unique ID (with respect to other atoms/selectors)
  default: true, // true: kr / false: en
});

export default langState;
