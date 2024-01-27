import React from "react";

const FormCheckbox = () => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text">Without Taxes</span>
        <input
          type="checkbox"
          checked="checked"
          className="checkbox checkbox-accent"
        />
      </label>
    </div>
  );
};

export default FormCheckbox;
