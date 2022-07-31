import PropTypes from "prop-types";
export const BtnPrimary = ({ text = "Primary" }) => {
  return (
    <button className="btn">{text}</button>
  );
};
BtnPrimary.protoTypes = {
  text: PropTypes.string,
};