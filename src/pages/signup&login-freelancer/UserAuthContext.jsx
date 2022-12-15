import { createContext, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/fire';
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { FcGoogle } from 'react-icons/fc';


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
	const { user, loading, error } = useAuthState(auth);

	const auth_one = {
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
		],
	};

	return (
		<UserAuthContext.Provider value={auth_one}>
			{children}
		</UserAuthContext.Provider>
	);
}

const useAuth = () => useContext(UserAuthContext);

export default UserAuthProvider;
export { useAuth };
