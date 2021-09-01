import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formsControl/formsControl";
import './login.scss';
import { login } from './../../redux/authReducer';
import { Redirect } from "react-router";
import './../common/formsControl/formsControl.scss'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Email' name={'email'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder='Password' name={'password'} component={Input} validate={[required]} type='password' />
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input} validate={[required]} /><span> remember me</span>
            </div>
            { props.error &&
                <div className={'summaryError'}>{props.error}</div>
            } 
            <div>
                <button>Login</button>
            </div>            
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login', })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };
    if (props.isAuth) {
        return(
            <Redirect to={'/profile'} />
        );
    };
    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);