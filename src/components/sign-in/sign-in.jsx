import { useState } from "react";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../firebase/firebase.utils";


import "./sign-in.scss";
import { async } from "@firebase/util";

const SignInForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetFormFields = () => {
        setEmail("");
        setPassword("");
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
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
                <FormInput name="email" handleChange={handleChange} label="email" value={email} required />
                <FormInput name="password" type="password" handleChange={handleChange} label="password" value={password} required />
                <div className="buttons-container">
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} buttonType="google"> google sign in</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;