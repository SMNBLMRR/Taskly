import React, { ReactNode, useEffect } from 'react';
import getUserInfoService from '../../../services/user';
import userStore from '../../../store/user';

interface AuthProviderProps {
    children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children}) => {
    const setUser = userStore((state) => state.setUser);
    const setHasLoaded = userStore((state) => state.setHasLoaded);
    useEffect(() => {
        async function isAuthenticated() {
            try {
                const res = await getUserInfoService();
                console.log(res?.data)
                if (res?.data) setUser(res?.data);
            } catch (err) {
                console.log(err);
            } finally {
                setHasLoaded(false);
            }
        }
        isAuthenticated();
    }, [setUser,setHasLoaded]);

    return (
        <>
          {children}  
        </>
    );
}

export default AuthProvider