import {
  createContext,
  useContext,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import axios from "axios";

const AuthContext = createContext<{
  loggedIn: boolean | null;
  setLoggedIn: React.Dispatch<SetStateAction<boolean | null>>;
}>({
  loggedIn: null,
  setLoggedIn: () => false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("/api/auth/validate");

        if (response.status === 200 && response.data) {
          setLoggedIn(response.data.loggedIn);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
