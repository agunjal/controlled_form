import React, { useState } from "react";
import FormInput from "./FormInput";
import "./ControlledForm.css";

function ControlledForm() {
  const [fields, setFields] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
  });

  handleInput = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  submitForm = (e) => {
    alert(`
      FirstName: ${fields.first_name}
      LastName: ${fields.last_name}
      Email: ${fields.email}
      PhoneNumber: ${fields.phone_number}
    `);

    e.preventDefault();
  };

  return (
    <form className="controlled-form">
      <FormInput
        onChange={handleInput}
        label="First Name"
        name="first_name"
        value={fields.first_name}
      />
      <FormInput
        onChange={handleInput}
        label="Last Name"
        name="last_name"
        value={fields.last_name}
      />
      <FormInput
        onChange={handleInput}
        label="Email"
        name="email"
        value={fields.email}
      />
      <FormInput
        onChange={handleInput}
        label="Phone Number"
        name="phone_number"
        value={fields.phone_number}
      />
      <button onClick={submitForm} className="btn" name="Submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default ControlledForm;
