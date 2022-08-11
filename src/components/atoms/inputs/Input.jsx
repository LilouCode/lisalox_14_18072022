import PropTypes from "prop-types";
export const Input = ({
  type = "text",
  ariaLabel,
  placeholder,
  name,
  id,
  value,
  onChange,
  isNotCTA = true,
}) => {
  return (
    <input
      aria-label={ariaLabel}
      id={id}
      className={isNotCTA ? "input" : "btn btn--cta input--btn"}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
Input.protoTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isNotCTA: PropTypes.bool,
};
