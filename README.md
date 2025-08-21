# 🔐 Authentication Project with React, Vite, and Firebase

A simple **React + Vite** web application featuring **Firebase Authentication**.  
Supports **sign-up, sign-in, Google Auth, and password reset**.

---

## ✨ Features
- **Sign-Up**: Register with email & password  
- **Sign-In**: Log in with email/password or Google account  
- **Password Reset**: Send reset email  
- **User Info**: Display name, email, and avatar on the home page  
- **Logout**: Sign out the current user  
- **Routing**: Navigate between pages with `react-router-dom`  

---

## 🛠 Tech Stack
- **Frontend**: React + Vite  
- **Authentication**: Firebase Authentication  
- **Routing**: `react-router-dom`  
- **Styling**: CSS  
- **Dependencies**: `firebase`, `react-router-dom`  

---

## 📦 Prerequisites
Make sure you have installed:  
- [Node.js](https://nodejs.org/) (v16+)  
- npm (v7+)  
- A [Firebase](https://firebase.google.com/) project  
- A [Google Cloud Console](https://console.cloud.google.com/) account (for Google Auth setup)  

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/auth-project.git
cd auth-project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Firebase
- Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/).  
- Enable **Email/Password** and **Google** sign-in methods.  
- Copy your Firebase config from **Project Settings → SDK setup** and paste it into `src/firebase.js`:

```js
// src/firebase.js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### 4. Configure Google Auth
- In **Google Cloud Console** → `APIs & Services` → `Credentials`, create an **OAuth 2.0 Client ID** (Web application).  
- Add:
  - `http://localhost:5173` → **Authorized JavaScript origins**  
  - `http://localhost:5173/__/auth/handler` → **Authorized redirect URIs**  
- Copy the Client ID to Firebase Console → **Authentication → Sign-in method → Google**.  
- In Firebase → **Authentication → Settings → Authorized domains**, ensure `localhost` is listed.  

### 5. Run the Project
```bash
npm run dev
```
Then open:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure
```
auth-project/
├── src/
│   ├── components/
│   │   ├── SignIn.jsx      # Sign-in page (email/password + Google)
│   │   ├── SignUp.jsx      # Sign-up page
│   ├── styles/
│   │   ├── App.css         # Main page styles
│   │   ├── Auth.css        # Authentication page styles
│   ├── App.jsx             # Main component with routing
│   ├── firebase.js         # Firebase configuration
│   ├── main.jsx            # Entry point
│   ├── index.css           # Global styles
├── .gitignore
├── package.json
├── README.md
```

---

## 🧑‍💻 Usage
- **Home Page** (`/`): Shows welcome message + user info if signed in  
- **Sign-Up Page** (`/signup`): Register new user  
- **Sign-In Page** (`/signin`): Log in via email/password or Google  

---

## 🐛 Troubleshooting
- **No logs?** → Check DevTools Console (F12)  
- **Google Auth COOP error?** → Use `signInWithRedirect`  
- **Firebase errors (e.g. auth/too-many-requests)?** → Wait a few minutes or reset password  
- **Port issues?** → Update port in Firebase Console & Google Cloud Console  

---

## 🔒 Security Notes
- `firebaseConfig` in `firebase.js` is safe for development, but protect it in production.  
- Restrict API keys in Google Cloud Console to your domains.  
- In Firebase, only allow authorized domains (e.g., localhost + production domain).  
- For public repos, consider storing secrets in **environment variables**.  

---

## 🚧 Future Improvements
- Better error messages  
- Protected routes for authenticated users  
- Add Firestore for user data  
- Tailwind CSS for styling  

---

## 📜 License
This project is licensed under the **MIT License**.
