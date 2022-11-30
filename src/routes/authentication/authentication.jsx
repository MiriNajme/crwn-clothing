import React from "react";
import SignInForm from "../../components/sign-in/sign-in";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import "./authentication.scss";

const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;