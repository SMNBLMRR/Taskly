import React, { ReactNode, useEffect } from "react";
import getUserInfoService from "../../../services/user";
import userStore from "../../../store/user";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { setUser, setHasLoaded } = userStore();
  useEffect(() => {
    async function isAuthenticated() {
      try {
        const res = await getUserInfoService();
        if (res?.data && res.status === 200) setUser(res?.data);
      } catch (err) {
        console.log(err);
      } finally {
        setHasLoaded(false);
      }
    }
    isAuthenticated();
  }, [setUser, setHasLoaded]);

  return <>{children}</>;
};

export default AuthProvider;
