//react
import React from "react";
//firebase
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
//components
import FormInput from "../form-input/FormInput.component";
import CustomBtn from "../custom-btn/CustomBtn.component";
import "./SignIn.styles.scss";

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			error: false,
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: "",
				password: "",
				error: false,
			});
		} catch (error) {
			this.setState({
				error: true,
			});
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="signIn-cont">
				<h2>I already have an account</h2>
				<p>Sign in with your email and password</p>
				{this.state.error ? (
					<p className="signin-error">
						We couldn't sign you in. Email or password is incorrect. ⚠️
					</p>
				) : null}
				<form onSubmit={this.handleSubmit} autoComplete="off">
					<FormInput
						type="email"
						name="email"
						label="Email"
						id="sign-in-email"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						id="sign-in-password"
						onChange={this.handleChange}
						required
					/>
					<CustomBtn type="submit"> SIGN IN </CustomBtn>
					<CustomBtn type="button" googleAuth onClick={signInWithGoogle}>
						SIGN IN WITH GOOGLE
					</CustomBtn>
				</form>
			</div>
		);
	}
}

export default SignIn;
