import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { SelectType } from 'types/Element.type';

const FormSelect: React.FC<SelectType> = (props) => {
  const { name, label, items, required, errmsg, control } = props;
  return (
    <FormControl fullWidth={true} error={errmsg ? true : false}>
      <InputLabel required={required}>{label}</InputLabel>
      <Controller
        name={name}
        render={(props) => (
          <Select
            onChange={(event) => {
              props.onChange(event);
            }}
            value={props.value}
            name={name}
            label={label}
            fullWidth={true}
          >
            {items.map((item) => {
              return (
                <MenuItem key={item.key} value={item.key}>
                  {item.value}
                </MenuItem>
              );
            })}
          </Select>
        )}
        control={control}
      />
      <FormHelperText>{errmsg}</FormHelperText>
    </FormControl>
  );
};

export default FormSelect;
