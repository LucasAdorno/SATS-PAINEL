import { Navigate } from "react-router-dom";
import { Header } from "../components";
// import { useAuth } from "../hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  //   const { user } = useAuth();
  //   if (!user) {
  // user is not authenticated
  // return <Navigate to="/" />;
  //   }
  return (
    <>
      <Header />
      {children}
    </>
  );
};
