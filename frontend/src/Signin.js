import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

//action属性
//formタグに指定する属性で、必ず指定しなければならない
// フォームの送信ボタンを押して送信されるデータの送信先を指定する
//method属性
//formタグに指定する属性で、必須ではない
// 送信するときの転送方法を指定する


/*
ログイン/ログアウトのエンドポイントはSpringSecurityの設定で自動的に作成される(自分でRestController、RequestMappingする必要はない）
必要になるまでCSRFのFilterは無効化しておくと吉
Webページからのユーザ/パスワード送信は”Formデータ”としてPOST送信する
 */

class Signin extends Component{

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit(){
        console.log("submitted.");
    };


    render(){
        const { classes } = this.props;
        const { formData } = this.state;
        return (
            <div>
                Hello Im signin.

                <form /*onSubmit={()=>this.handleSubmit}*/ th:action="@{/login}" method="post" className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Email"
                        name="email"
                        className={classes.textField}
                        value={formData.email}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        id="standard-name"
                        label="Password"
                        name="password"
                        className={classes.textField}
                        value={formData.password}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>


            </div>
        );
    }
}


Signin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);