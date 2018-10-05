import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import validator from 'validator';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class FilledTextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        email:'',
        multiline: 'Controlled',
        currency: 'EUR',
        showPassword:false,
        password:'',
        showPasswordConfirm:false,
        passwordConfirm:'',
        error:false,
    };

    handleChange = name => event => {
        this.setState({
                      [name]: event.target.value,
        });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleClickShowPasswordConfirm = () => {
        this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
    };

    handleError=(cb)=>{
        if(cb){
            return false;//no error
        }
        return true;
    };

    handleSubmit() {
       console.log("submitted.");
    }

render() {
    const { classes } = this.props;

    return (
        <form className={classes.container} autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
    id="filled-name"
    label="Name"
    className={classes.textField}
    value={this.state.name}
    onChange={this.handleChange('name')}
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-uncontrolled"
    label="Uncontrolled"
    defaultValue="foo"
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    required
    id="filled-required"
    label="Required"
    defaultValue="Hello World"
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    error={true}
    id="filled-error"
    label="Error"
    defaultValue="Hello World"
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    disabled
    id="filled-disabled"
    label="Disabled"
    defaultValue="Hello World"
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-email-input"
    error={this.handleError(validator.isEmail(this.state.email))}
    label="Email"
    value={this.state.email}
    onChange={this.handleChange('email')}
    className={classes.textField}
    type="email"
    name="email"
    autoComplete="email"
    margin="normal"
    variant="filled"
        />
            <TextField
                id="filled-adornment-password"
                className={classNames(classes.margin, classes.textField)}
                variant="filled"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                InputProps={{
                    endAdornment: (
                        <InputAdornment variant="filled" position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                            >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                error={!validator.equals(this.state.passwordConfirm, this.state.password)}
                id="filled-adornment-password-confirm"
                className={classNames(classes.margin, classes.textField)}
                variant="filled"
                type={this.state.showPasswordConfirm ? 'text' : 'password'}
                label="confirm password"
                value={this.state.passwordConfirm}
                onChange={this.handleChange('passwordConfirm')}
                InputProps={{
                    endAdornment: (
                        <InputAdornment variant="filled" position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPasswordConfirm}
                            >
                                {this.state.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        <TextField
    id="filled-read-only-input"
    label="Read Only"
    defaultValue="Hello World"
    className={classes.textField}
    margin="normal"
    InputProps={{
        readOnly: true,
    }}
    variant="filled"
        />
        <TextField
    id="filled-dense"
    label="Dense"
    className={classNames(classes.textField, classes.dense)}
    margin="dense"
    variant="filled"
        />
        <TextField
    id="filled-multiline-flexible"
    label="Multiline"
    multiline
    rowsMax="4"
    value={this.state.multiline}
    onChange={this.handleChange('multiline')}
    className={classes.textField}
    margin="normal"
    helperText="hello"
    variant="filled"
        />
        <TextField
    id="filled-multiline-static"
    label="Multiline"
    multiline
    rows="4"
    defaultValue="Default Value"
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-helperText"
    label="Helper text"
    defaultValue="Default Value"
    className={classes.textField}
    helperText="Some important text"
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-with-placeholder"
    label="With placeholder"
    placeholder="Placeholder"
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-textarea"
    label="Multiline Placeholder"
    placeholder="Placeholder"
    multiline
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-number"
    label="Number"
    value={this.state.age}
    onChange={this.handleChange('age')}
    type="number"
    className={classes.textField}
    InputLabelProps={{
        shrink: true,
    }}
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-search"
    label="Search field"
    type="search"
    className={classes.textField}
    margin="normal"
    variant="filled"
        />
        <TextField
    id="filled-select-currency"
    select
    label="Select"
    className={classes.textField}
    value={this.state.currency}
    onChange={this.handleChange('currency')}
    SelectProps={{
        MenuProps: {
            className: classes.menu,
        },
    }}
    helperText="Please select your currency"
    margin="normal"
    variant="filled"
        >
        {currencies.map(option => (
        <MenuItem key={option.value} value={option.value}>
    {option.label}
</MenuItem>
))}
</TextField>
    <TextField
    id="filled-select-currency-native"
    select
    label="Native select"
    className={classes.textField}
    value={this.state.currency}
    onChange={this.handleChange('currency')}
    SelectProps={{
        native: true,
            MenuProps: {
            className: classes.menu,
        },
    }}
    helperText="Please select your currency"
    margin="normal"
    variant="filled"
        >
        {currencies.map(option => (
        <option key={option.value} value={option.value}>
    {option.label}
</option>
))}
</TextField>
    <TextField
    id="filled-full-width"
    label="Label"
    style={{ margin: 8 }}
    placeholder="Placeholder"
    helperText="Full width!"
    fullWidth
    margin="normal"
    variant="filled"
    InputLabelProps={{
        shrink: true,
    }}
    />
    <TextField
    id="filled-bare"
    className={classes.textField}
    defaultValue="Bare"
    margin="normal"
    variant="filled"
        />


            <Button type='submit' disabled={false} color="primary" className={classes.button}>
                Disabled
            </Button>

        </form>
);
}
}

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);