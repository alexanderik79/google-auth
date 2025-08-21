🔑 Authentication Project with React, Vite, and Firebase
This is a React-based web application built with Vite, featuring user authentication via Firebase. It includes sign-up, sign-in, Google Auth, and password reset functionalities.

✨ Features
Sign-Up: Register a new user with an email and password.

Sign-In: Log in with an email/password or a Google account.

Password Reset: Send a password reset email.

User Info: Display user details (name, email, avatar) on the home page.

Logout: Sign out the current user.

Routing: Navigate between home, sign-up, and sign-in pages using react-router-dom.

🛠️ Tech Stack
Frontend: React, Vite

Authentication: Firebase Authentication

Routing: react-router-dom

Styling: CSS

Dependencies: firebase, react-router-dom

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v16 or higher)

npm (v7 or higher)

A Firebase account

A Google Cloud Console account (for Google Auth setup)

🚀 Setup Instructions
1. Clone the Repository
Bash

git clone https://github.com/your-username/auth-project.git
cd auth-project
2. Install Dependencies
Bash

npm install
3. Configure Firebase
Go to the Firebase Console and create a new project.

In the Authentication → Sign-in method section, enable:

Email/Password

Google (add your Web Client ID from the Google Cloud Console).

In Project Settings, copy your Firebase configuration (firebaseConfig).

Update src/firebase.js with your configuration:

JavaScript

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
4. Configure Google Auth
Go to the Google Cloud Console and select your Firebase project.

Navigate to APIs & Services → Credentials.

Create an OAuth 2.0 Client ID for a Web application.

Add http://localhost:5173 to Authorized JavaScript origins and http://localhost:5173/__/auth/handler to Authorized redirect URIs.

Copy the Client ID and paste it into the Firebase Console in Authentication → Sign-in method → Google → Web client ID.

In the Firebase Console, under Authentication → Settings → Authorized domains, ensure localhost is listed.

5. Run the Project
Bash

npm run dev
Open http://localhost:5173 in your browser.

📁 Project Structure
auth-project/
├── src/
│   ├── components/
│   │   ├── SignIn.jsx        # Sign-in page (email/password + Google)
│   │   ├── SignUp.jsx        # Sign-up page
│   ├── styles/
│   │   ├── App.css           # Main page styles
│   │   ├── Auth.css          # Authentication page styles
│   ├── App.jsx               # Main component with routing
│   ├── firebase.js           # Firebase configuration
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
├── .gitignore               # Ignore files
├── package.json             # Project dependencies
├── README.md                # This file
❓ Usage and Troubleshooting
Usage
Home Page (/): Displays a welcome message, user info (if signed in), and links to sign-in/sign-up or a sign-out button.

Sign-Up Page (/signup): Allows you to create a new user.

Sign-In Page (/signin): Allows you to sign in with an email/password or Google.

Troubleshooting
No console logs: Make sure your browser's console (F12) shows all log levels.

Google Auth error (Cross-Origin-Opener-Policy): This is a non-critical error that can be fixed by switching to signInWithRedirect (contact the developer for implementation).

Firebase errors (e.g., auth/too-many-requests): Wait a few minutes or try resetting the password.

Port issues: If you're using a different port, update it in the Firebase Console and Google Cloud Console.

🔒 Security Notes
The Firebase configuration (firebaseConfig) in firebase.js is safe for local development because Firebase relies on security rules and authorized domains.

Ensure that Firebase Authentication → Settings → Authorized domains only lists your domains (e.g., localhost and your production domain).

In Google Cloud Console → APIs & Services → Credentials, restrict the API key to your domains and the Firebase Authentication API.

For public repositories, consider moving firebaseConfig to environment variables.

💡 Future Improvements
Add more user-friendly error messages.

Implement protected routes to restrict access to authenticated users.

Integrate Firestore to store additional user data.

Use Tailwind CSS for enhanced styling.

📄 License
This project is licensed under the MIT License.