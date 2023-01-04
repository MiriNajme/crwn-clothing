import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import CustomButton, { BUTTON_TYPE_CLASSES } from "../custom-button/custom-button";
import { selectCurrentUser } from "../../store/user/user.selector";
import "./sign-up-form.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const currentUser = useSelector(selectCurrentUser);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email is alredy in use");
            } else {
                console.log("user creation encountered an error", error);
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    return (

        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" required onChange={handleChange} name="displayName" label="Display Name" value={displayName} />
                <FormInput type="email" required onChange={handleChange} name="email" label="email" value={email} />
                <FormInput type="password" required onChange={handleChange} name="password" label="password" value={password} />
                <FormInput type="password" required onChange={handleChange} name="confirmPassword" label="Confirm Password" value={confirmPassword} />
                <CustomButton type="submit" buttonType={BUTTON_TYPE_CLASSES.google}>Sign Up</CustomButton>
            </form>
        </div>

    );
}

export default SignUpForm;