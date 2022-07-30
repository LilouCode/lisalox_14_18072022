import PropTypes from "prop-types";
export const Input = ({type = "text"}) =>{
    return(
        <input className="input" type={type} />
    )
}
Input.protoTypes = {
    type: PropTypes.string
  };