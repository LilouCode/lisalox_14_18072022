import PropTypes from "prop-types";
export const Label = ({label, children}) =>{
return(
    <label className="label">{label}{children}</label>
)
}
Label.protoTypes = {
    label: PropTypes.string.isRequired
  };