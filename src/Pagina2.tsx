import React, { useState, useEffect } from "react";

const UserInitial = [
  { username: "MihaiCanti", password: "parola" },
  { username: "User2", password: "parola2" },
  { username: "User 3", password: "parola3" },
];

export function Pagina2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState(UserInitial);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers([...users, ...JSON.parse(storedUsers)]);
    }
  }, [users]);

  const handleLogin = () => {
    
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(foundUser));
      alert("Logged in successfully");
    } else {
      alert("Login failed");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    alert("Logged out successfully");
  };

  const renderLoginForm = () => {
    return (
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    );
  };

  const renderLogoutButton = () => {
    const storedUser = localStorage.getItem("user");
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
    return (
      <div>
        {loggedInUser && <p>User: {loggedInUser.username}</p>}
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  };

  return <div>{isLoggedIn ? renderLogoutButton() : renderLoginForm()}</div>;
};

export default Pagina2;
