import React from 'react';
import TextField from '@material-ui/core/TextField';
import { shadeTextFieldStylesHook } from '@mui-treasury/styles/textField/shade';

const ShadeTextFieldStyle = () => {
  const inputBaseStyles = shadeTextFieldStylesHook.useInputBase();
  const inputLabelStyles = shadeTextFieldStylesHook.useInputLabel();
  return (
    <div>
      <TextField
        label={'Username'}
        placeholder={'Username'}
        margin={'normal'}
        required
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
      <TextField
        label={'Password'}
        placeholder={'Password'}
        margin={'normal'}
        disabled
        InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
        InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
      />
      <div />
  
    </div>
  );
};

export default ShadeTextFieldStyle;