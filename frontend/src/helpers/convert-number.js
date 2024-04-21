import numeral from "numeral";

const convertNumber = (numb) => {
  return numeral(numb).format("0,0.00");
};

export default convertNumber;
