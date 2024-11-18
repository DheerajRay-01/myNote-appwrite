import React from "react";
import { forwardRef } from "react";

function Input(
  { inputType = "text", place, inputLabel, className, ...props },
  ref
) {
  return (
    <div className="input">
      <input
        type={inputType}
        className={`px-3 py-2 rounded-md font-semibold ${className}`}
        placeholder={place}
        {...props}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
