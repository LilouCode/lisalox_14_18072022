import PropTypes from "prop-types";
export const BtnPrimary = ({ text = "Primary" }) => {
  return (
    <button className="btn btn--primary">{text}</button>
  );
};
BtnPrimary.protoTypes = {
  text: PropTypes.string,
};