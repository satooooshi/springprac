import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

//For validation
//https://www.npmjs.com/package/react-material-ui-form-validator
//https://www.npmjs.com/package/validator
//form tutorial
//http://www.htmq.com/html/input.shtml
//input tutorial
//http://www.htmq.com/html5/input.shtml

import validator from 'validator';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


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

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
                repeatPassword: '',
                birth:'',
            },
            submitted: false,
        };

        //when write like onChange={(e)=>this.handleChange(e)}
        //doesnt need below
        //when write like onChange={this.handleChange}
        //need below
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.formData.password) {
                return false;
            }
            return true;
        });

    }


    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit() {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    /*
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

    enableButton() {
        this.setState({
            canSubmit: true
        });
    };

    disableButton() {
        this.setState({
            canSubmit: false
        });
    };
*/
render() {
    const { classes } = this.props;
    const { formData, submitted } = this.state;

    return (
        <div>

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Sign Up Form</h2>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    type={'password'/*'text'*/}
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    value={formData.repeatPassword}
                />
                <br />
                <TextValidator
                    label="Birth Date"
                    InputLabelProps={{ shrink: true }}
                    onChange={this.handleChange}
                    name="birth"
                    type="date"
                    inputProps={{ min:"1900-01-01", max:parseDate() }}
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={formData.birth}
                />
                <Button
                    raised
                    type="submit"
                    color="primary"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>


        </div>
);
}
}

function parseDate(){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    today = yyyy+'-'+mm+'-'+dd;
    return today;
}



SignUpForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);

