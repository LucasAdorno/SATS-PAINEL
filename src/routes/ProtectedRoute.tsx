import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../components";

interface IProtectRoutes {
  children: any;
}

const ProtectedRoute: React.FC<IProtectRoutes> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        setUser(authUser);

        if (authUser["custom:role"] === "Operator")
          throw new Error("Sem permissão");
        return Promise.resolve(true);
      } catch (err) {
        return Promise.reject(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  return !loading && !user ? (
    <Navigate to="/" />
  ) : (
    <>
      <Header />
      {children}
    </>
  );
};

export { ProtectedRoute };
