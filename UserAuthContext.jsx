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
