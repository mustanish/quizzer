import React from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { InputType } from 'types/Element.type';

const FormInput: React.FC<InputType> = (props) => {
  const { name, label, type, required, errmsg, control } = props;
  return (
    <Controller
      name={name}
      render={(props) => (
        <TextField
          onChange={(event) => {
            props.onChange(event);
          }}
          value={props.value}
          error={errmsg ? true : false}
          helperText={errmsg}
          name={name}
          label={label}
          type={type}
          fullWidth={true}
          required={required}
        />
      )}
      control={control}
    />
  );
};

export default FormInput;
