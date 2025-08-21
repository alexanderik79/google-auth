import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function Dashboard({ user }) {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2>Dashboard</h2>
      <p>Welcome, {user.displayName || 'User'}!</p>
      <p>Email: {user.email}</p>
      {user.photoURL && <img src={user.photoURL} alt="User avatar" className="avatar" />}
      {!user.photoURL && <img src="https://ui-avatars.com/api/?name=U&size=50" alt="User avatar" className="avatar" />}
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
}

export default Dashboard;