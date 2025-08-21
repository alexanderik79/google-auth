import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
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
              <img
                src={user.photoURL || 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ9bX8J9f3NOYMHsSMYKhxBSoIZmaILNXdcCCB4WJQiUVfPzwwU5fpPqPQMAM5R4pMQ_Xv4yFq5ropaFm-0h8CcNQ5punbr9FtfQnae_c9Hwq72PC0'}
                alt="User avatar"
                className="avatar"
              />
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={<h1>Welcome{user ? `, ${user.displayName || 'User'}` : ''}!</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;