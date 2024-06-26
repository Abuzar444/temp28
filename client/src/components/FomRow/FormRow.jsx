// -React-
import React from "react";

const FormRow = React.forwardRef(
  ({ type, name, labelText, defaultValue, onChange }, ref) => {
    return (
      <div className="mb-4 w-[90%]">
        <label
          htmlFor={name}
          className="font-normal uppercase font-montserrat text-[14px]"
        >
          {labelText || name}
        </label>
        <input
          type={type}
          name={name}
          defaultValue={defaultValue || ""}
          ref={ref}
          className="w-full bg-gray-800 text-white border-none rounded-lg px-4 py-3"
          onChange={onChange}
          required
        />
      </div>
    );
  }
);

export default FormRow;
