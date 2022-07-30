import PropTypes from "prop-types";
export const BtnDisabled = ({ text = "Disabled" }) => {
  return (
    <button className="btn btn--Disabled">{text}</button>
  );
};
BtnDisabled.protoTypes = {
  text: PropTypes.string,
};