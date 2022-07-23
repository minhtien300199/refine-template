import { AuthProvider } from "@pankod/refine";
import { useAuth0 } from "@auth0/auth0-react";

function CustomAuthProvider() {
    const {
        getIdTokenClaims,
        isLoading,
        loginWithRedirect,
        isAuthenticated,
        user,
        logout,
      } = useAuth0();
    const authProvider: AuthProvider = {
        login: () => {
          loginWithRedirect();
          return Promise.resolve();
        },
        logout: () => {
          logout({ returnTo: window.location.origin });
          return Promise.resolve("/");
        },
        checkError: () => Promise.resolve(),
        checkAuth: () => {
          if (isAuthenticated) {
            return Promise.resolve();
          }
    
          return Promise.reject();
        },
        getPermissions: () => Promise.resolve(),
        getUserIdentity: async () => {
          if (user) {
            return Promise.resolve({
              ...user,
              avatar: user.picture,
            });
          }
          return Promise.reject();
        },
      };
    return authProvider;
}
  
export default CustomAuthProvider;