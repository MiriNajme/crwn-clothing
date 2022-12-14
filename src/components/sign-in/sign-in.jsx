import { useState } from "react";

import FormInput from "../../components/form-input/form-input";
import CustomButton, { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../firebase/firebase.utils";

import "./sign-in.scss";

const SignInForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const resetFormFields = () => {
        setEmail("");
        setPassword("");
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
    }


    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
            }
        }
    }



    const handleChange = (event) => {
        const name = event.target.name;
        (name === "email") ? setEmail(event.target.value) : setPassword(event.target.value);
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" onChange={handleChange} label="email" value={email} required />
                <FormInput name="password" type="password" onChange={handleChange} label="password" value={password} required />
                <div className="buttons-container">
                    <CustomButton type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}> google sign in</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;