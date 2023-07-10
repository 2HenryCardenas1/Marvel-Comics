import {Auth, Hub} from 'aws-amplify';
import {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
export const AuthContext = createContext({
  auth: undefined,
  attributes: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider({children}) {
  const [attributes, setAttributes] = useState(undefined);
  const [auth, setAuth] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setAuth(authUser);
      setAttributes(authUser.attributes);
    } catch (error) {
      setAuth(null);
    }
  };

  // check if the user is already logged in
  useEffect(() => {
    checkUser();
  }, []);

  // Listen for auth events, render when reload the app
  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  const login = async (username, password) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(username, password);
      console.log(response);
      setAuth(response);
      setAttributes(response.attributes);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  const logout = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      Auth.signOut();
      setAuth(null);
      setAttributes(null);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
    setLoading(false);
  };

  const valueContext = {
    auth,
    login,
    logout,
    attributes,
    loading,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
