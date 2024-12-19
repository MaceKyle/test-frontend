import Header from "./Header";
import '../styles/Account.css';
import { useState } from "react";


function Account(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("dummyUsername");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userLoggedIn = true;

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  return (
    <>
      <Header userLoggedIn={userLoggedIn} username={"DummyUsername"} />
      <h1 style={{color:'black'}}>Hello, {username}</h1>
      <form className="change-user-details-form" onSubmit={console.log("Submit!")}>
        <input 
          className="post-email-input"
          type="text" 
          id="email" 
          name="email" 
          aria-label="New email?" 
          placeholder="Enter new email" 
          value={email}
          onChange={handleEmailChange}
          required 
        />
        <input 
          className="post-username-input"
          type="text" 
          id="username" 
          name="username" 
          aria-label="New username?" 
          placeholder="Enter new username" 
          value={username}
          onChange={handleUsernameChange}
          required 
        />
        <input 
          className="post-password-input"
          type="password" 
          id="password" 
          name="password" 
          aria-label="New password?" 
          placeholder="Enter new password" 
          value={password}
          onChange={handlePasswordChange}
          required 
        />
        <input 
          className="post-confirm-password-input"
          type="password" 
          id="confirm-password" 
          name="confirm-password" 
          aria-label="Confirm password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required 
        />
        <input 
          className="post-changed-content-submit" 
          type="submit"
          value="Confirm changes" 
        />
      </form>
    </>
  );
}

export default Account;