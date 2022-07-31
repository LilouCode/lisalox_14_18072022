import PropTypes from "prop-types";
export const Input = ({type = "text", placeholder, name,value, onChange, isNotCTA = true}) =>{
    return(
        <input className={isNotCTA? "input": "btn btn--cta input--btn" } type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    )
}
Input.protoTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isNotCTA: PropTypes.bool,
  };