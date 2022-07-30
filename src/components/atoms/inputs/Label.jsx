import PropTypes from "prop-types";
export const Label = ({htmlFor, label}) =>{
return(
    <label className="label" htmlFor={htmlFor}>{label}</label>
)
}
Label.protoTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired
  };