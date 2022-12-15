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
