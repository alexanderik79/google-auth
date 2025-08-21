import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import '../styles/Auth.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sign-in attempt with:', { email, password });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in');
      const token = await auth.currentUser.getIdToken();
      console.log('JWT token:', token);
      console.log('user ID:', auth.currentUser.uid);
      navigate('/');
    } catch (err) {
      console.error('Sign-in error:', err);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log('Google sign-in successful');
      console.log('JWT token:', token);
      console.log('user ID:', auth.currentUser.uid);
      navigate('/');
    } catch (err) {
      console.error('Google Auth error:', err);
      setError(err.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Enter an email to reset your password');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset email sent to your email');
    } catch (err) {
      console.error('Password reset error:', err);
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <button className="google-button" onClick={handleGoogleSignIn}>
        Sign In with Google
      </button>
      <button className="reset-password-button" onClick={handlePasswordReset}>
        Forgot Password?
      </button>
      <p>
        No account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;