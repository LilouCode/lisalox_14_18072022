import PropTypes from "prop-types";
export const BtnCTA = ({ text = "Call of Action" }) => {
  return (
    <button className="btn btn--cta">{text}</button>
  );
};
BtnCTA.protoTypes = {
  text: PropTypes.string,
};
