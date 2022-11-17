import React from "react";

import "./sign-in.scss";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../custom-button/custom-button";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" handleChange={this.handleChange} label="email" value={this.state.email} required />
                    <FormInput name="password" type="password" handleChange={this.handleChange} label="password" value={this.state.password} required />
                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn;