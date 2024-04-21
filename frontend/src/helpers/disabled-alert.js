import cross from "../assets/cross.png";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const DisableAlert = ({ title, message }) => {
  return Swal.fire({
    title: title,
    text: message,
    imageUrl: cross,
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "error-icon",
  });
};

export default DisableAlert;
