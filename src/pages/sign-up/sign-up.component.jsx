import React, { useState } from "react";

import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";

import { setCurrentUser } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUpPage = ({ currentUser, setCurrentUser }) => {
    const [userCredentials, setUserCredentials] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { fullName, email, password, confirmPassword } = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password dont matched!!");
            return;
        }

        setCurrentUser({ fullName, email, password });
    };

    const handleChange = (event) => {
        // get name value using e.target
        const { name, value } = event.target;

        // set a new object
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <div className="sign-up__logo">
                <img src="./img/logo/barber_time_logo.png" alt="" />
            </div>
            {currentUser ? (
                <h2 className="message-success">
                    Great! Please check your email to activate!
                </h2>
            ) : (
                <div>
                    <h2 className="title">
                        Signup with your Email and Password
                    </h2>
                    <form
                        action=""
                        className="sign-up-form"
                        onSubmit={handleSubmit}
                    >
                        <FormInput
                            type="text"
                            name="fullName"
                            value={fullName}
                            onChange={handleChange}
                            label="Full Name"
                            required
                        />
                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            label="Email"
                            required
                        />
                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            label="Password"
                            required
                        />
                        <FormInput
                            type="Password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            label="Confirm Password"
                            required
                        />

                        <button type="submit"> Signup </button>
                    </form>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (userCredentials) =>
            dispatch(setCurrentUser(userCredentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
