import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Pages/Authentication/Providers/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [currentUserRole, setCurrentUserRole] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((users) => {
        const currentUser = users.find((usr) => usr.email === user.email);
        setCurrentUserRole(currentUser.role)
      });
  }, []);
  return [currentUserRole];
};

export default useUser;
