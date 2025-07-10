import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from token if available
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token }); // Optionally decode token for user info
    }
  }, []);

  const login = async (credentials) => {
    const res = await loginUser(credentials);
    localStorage.setItem('token', res.data.token);
    setUser({ token: res.data.token });
    navigate('/home'); // Redirect after login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
