import { useState, useEffect, createContext, useContext } from 'react';
import { userAPI } from '../services/api';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        setError('Failed to check authentication');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      
      // Save user to backend
      const response = await userAPI.createOrUpdateUser(userData);
      
      if (response.success) {
        const userInfo = response.data;
        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
        return { success: true, user: userInfo };
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  };

  // Get user stats
  const getUserStats = async () => {
    try {
      if (!user?.email) {
        throw new Error('No user email available');
      }
      
      const response = await userAPI.getUserStats(user.email);
      return response.data;
    } catch (error) {
      console.error('Get user stats error:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    getUserStats,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
