import PropTypes from "prop-types";
import { Input } from "../../atoms/inputs/Input"

export const FieldDeluxe = ({type = "text", placeholder, name, id, value, onChange, label}) =>{
    return(
        <div className="field">
            <label className="label">
            {label}
            <Input id={id} type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
        </label>
        </div>
    )
}
FieldDeluxe.protoTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
  };