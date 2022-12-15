import { createContext, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuthService } from '../lib/firebase';
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth';

import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const UserAuthContext = createContext();

/**
 * The `UserAuthProvider` component is a wrapper that provides authentication-related context
 * to its children. It uses the `useAuthState()` hook to get the current user, loading state,
 * and error state from the `firebaseAuthService`, and it provides this information to its
 * children via the `UserAuthContext` context object. Additionally, it provides methods for
 * signing in with email and password or with a third-party authentication provider.
 *
 * @param {Object} props - The component's props
 * @param {Object} props.children - The component's children
 * @returns {JSX.Element} A React component that wraps its children in the `UserAuthContext` provider.
 */

function UserAuthProvider({ children }) {
	const { user, loading, error } = useAuthState(firebaseAuthService);

	const auth = {
		user,
		loading,
		error,
		signInWithEmailAndPassword,
		signInWithPopup,
		providers: [
			{
				icon: <FcGoogle size={28} />,
				provider: new GoogleAuthProvider(),
			},
			{
				icon: <BsGithub size={28} />,
				provider: new GithubAuthProvider(),
			},
		],
	};

	return (
		<UserAuthContext.Provider value={auth}>
			{children}
		</UserAuthContext.Provider>
	);
}

const useAuth = () => useContext(UserAuthContext);

export default UserAuthProvider;
export { useAuth };
