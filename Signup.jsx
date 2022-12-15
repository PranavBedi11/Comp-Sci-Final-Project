import styles from '../css/signup.module.css';

import { useEffect } from 'react';
import { useAuth } from './UserAuthContext';
import { firebaseAuthService } from '../lib/firebase';

/**
 * The `SignUp` component is a form that allows users to create a new account. It displays
 * buttons that allow users to sign up using third-party authentication providers, such as
 * Google or Facebook. It also includes fields for entering an email and password, which
 * are used to sign up for a local account.
 *
 * @returns {JSX.Element} A React component that renders the sign-up form.
 */

const SignUp = () => {
	
	const auth = useAuth();

	useEffect(() => {
		console.log(auth.user);
	}, [auth.user]);

/**
 * Handles form submission by extracting the email and password values from the form data
 * and calling the `auth.signInWithEmailAndPassword()` function with these values.
 * 
 * @param {Event} event - The form submission event
 * @returns {void}
 */
	
	const handleFormSubmission = (event) => {
		
		event.preventDefault();

		const { email, password } = Object.fromEntries(
			new FormData(event.target)
		);

		auth.signInWithEmailAndPassword(firebaseAuthService, email, password);
	};

	return (
		<div className={styles.container}>
			<div>
				<h1>Create an Account</h1>
				<div className={styles.provider_row}>
					{auth.providers.map((provider, idx) => (
						<div
							onClick={() =>
								auth.signInWithPopup(
									firebaseAuthService,
									provider.provider
								)
							}
							key={idx}
							className={styles.provider_button}
						>
							{provider.icon}
						</div>
					))}
				</div>
			</div>
			<form className={styles.form} onSubmit={handleFormSubmission}>
				<fieldset className={styles.field}>
					<label htmlFor="email">Email</label>
					<input
						autoComplete="current-password"
						name="email"
						type="email"
						id="email"
						placeholder="Gmail@gmail.com"
					/>
				</fieldset>
				<fieldset className={styles.field}>
					<label htmlFor="password">Password</label>
					<input
						autoComplete="current-password"
						name="password"
						type="password"
						id="password"
						placeholder="SUPER_SECRET_PASSWORD"
					/>
				</fieldset>
				<button type="submit" className={styles.sign_in}>
					Sign in
				</button>
			</form>
		</div>
	);
};

export default SignUp;
