import React from "react";

function FormInput(props) {
  return (
    <div className="form-input-field">
      <label>{props.label}</label>
      <input
        onChange={props.onChange}
        type="input"
        name={props.name}
        value={props.value}
      />
    </div>
  );
}

export default FormInput;
