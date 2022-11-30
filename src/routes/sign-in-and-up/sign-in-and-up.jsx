import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../firebase/firebase.utils";

import "./sign-in-and-up.scss";

const SignInAndUp = () => {
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div className="sign-in-and-up">
            <SignIn />
            <SignUpForm />
        </div>
    )
}

export default SignInAndUp;