import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          {user ? (
            <div className="user-info">
              <Link to="/dashboard">
                <img
                  src={user.photoURL || 'https://ui-avatars.com/api/?name=U&size=50'}
                  alt="User avatar"
                  className="avatar"
                />
              </Link>
              <div>
                <p>{user.displayName || 'User'}</p>
                <p>{user.email}</p>
              </div>
              <button onClick={handleLogout}>Sign Out</button>
            </div>
          ) : (
            <div>
              <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </nav>
        <Routes>
          <Route
            path="/signup"
            element={user ? <Navigate to="/dashboard" /> : <SignUp />}
          />
          <Route
            path="/signin"
            element={user ? <Navigate to="/dashboard" /> : <SignIn />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <div className="home-container">
                <h1>Welcome{user ? `, ${user.displayName || 'User'}` : ''}!</h1>
                <p>
                  This is a simple authentication app built with React, Vite, and Firebase. 
                  It supports sign-up and sign-in with email/password or Google, password 
                  reset, and a protected dashboard for authorized users.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;