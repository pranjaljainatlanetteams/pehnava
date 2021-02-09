import React from 'react';
import './form-input.styles.scss';

const FormInput = (
  {
    handleChange,
    label, //ye le rhe hai taki selectivly apn label ko use kr ske
    ...otherProps
  } //handle change le rhe hai taki apn bubble up kr ske jo bhi change ho rhe hai
) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {/* agar lable hai toh label ko dikhao baki null dikaho */}
    {label
      ? (<label
          className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}
        >
        {label}

        </label>
        )  : null
        }
  </div>
);
export default FormInput;