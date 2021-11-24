import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

initAuth();
const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setLoading(false);
    });
  }, []);
  return {
    users,
    loading,
    setUsers,
    signInUsingGoogle,
    logOut,
  };
};
export default useFirebase;
