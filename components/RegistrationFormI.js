import React from 'react';
import TextField from '@material-ui/core/TextField';
import { shadeTextFieldStylesHook } from '@mui-treasury/styles/textField/shade';

const ShadeTextFieldStylee = () => {
    const inputBaseStyles = shadeTextFieldStylesHook.useInputBase();
    const inputLabelStyles = shadeTextFieldStylesHook.useInputLabel();
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <TextField
                    label={'Name'}
                    placeholder={'Name'}
                    margin={'normal'}
                    required
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
                    style={{
                        maxWidth: "600px"
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <TextField
                    label={'Password'}
                    placeholder={'Password'}
                    margin={'normal'}
                    disabled
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
                />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <TextField
                    label={'Username'}
                    placeholder={'Username'}
                    margin={'normal'}
                    required
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
                />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <TextField
                    label={'Username'}
                    placeholder={'Username'}
                    margin={'normal'}
                    required
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true }}
                />
            </div>


        </>
    );
};

export default ShadeTextFieldStylee;