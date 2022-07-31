import { FieldDeluxe } from "../molecules/fields/FieldDeluxe";
import { Input } from "../atoms/inputs/Input";
export const Form = () => {
  return (
    <form className="form">
      <div className="form__section" id="identity">
      <FieldDeluxe
        name="FirstName"
        placeholder="Enter your first name"
        type="text"
        label="First Name"
      />
      <FieldDeluxe
        name="LastName"
        placeholder="Enter your last name"
        type="text"
        label="Last Name"
      />
      <FieldDeluxe name="Birth" type="date" label="Date of Birth" />
      <FieldDeluxe name="Start" type="date" label="Start Date" />
      </div>
      <div className="form__section" id="address">
        <h4>Address</h4>
        <div className="form__section form__section--border ">
          <FieldDeluxe
            name="Street"
            placeholder="Enter the street"
            type="text"
            label="Street"
          />
          <FieldDeluxe
            name="City"
            placeholder="Enter the city"
            type="text"
            label="City"
          />
          <FieldDeluxe name="State" type="select" label="State" />
          <FieldDeluxe name="ZipCode" type="number" label="Zip Code" />
        </div>
      </div>
      <FieldDeluxe name="Department" type="select" label="Department" />
      <Input type="submit" value="Send" isNotCTA={false}/>
    </form>
  );
};
