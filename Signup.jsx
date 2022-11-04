import styles from '../css/signup.module.css';

import { useEffect } from 'react';
import { useAuth } from './UserAuthContext';
import { firebaseAuthService } from '../lib/firebase';

const SignUp = () => {
	const auth = useAuth();

	useEffect(() => {
		console.log(auth.user);
	}, [auth.user]);

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
