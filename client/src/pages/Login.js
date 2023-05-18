import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { getUsers } from "../api";

export const Login = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [users, setUsers] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let userExists = false;
    let passwordMatch = false;

    if (userName) {
      users.forEach((e) => {
        if (e.name.toLowerCase() == userName.toLowerCase()) {
          userExists = true;
          if (e.password == userPassword) {
            passwordMatch = true;
            return;
          }
        }
      });
    } else {
      alert("please type a user name or email");
    }

    if (userExists && passwordMatch) {
      alert(
        "Hi " +
          userName.charAt(0).toUpperCase() +
          userName.slice(1) +
          "! welcome back!"
      );
      setLogged(true);
    } else {
      alert("worng password");
    }
  };

  const handleLogout = () => {
    alert(
      "Bye " +
        userName.charAt(0).toUpperCase() +
        userName.slice(1) +
        "! Have a grate day!"
    );
    setUserName("");
    setLogged(false);
    navigate("/login");
  };

  return (
    <section className="loginMain">
      {logged ? (
        <div>
          <h1>You are already logged, wanna logout?</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="loginBox">
          <h1>Login</h1>
          <form className="loginForm" onSubmit={handleSubmit}>
            <div>
              <label for="fname">User:</label>
              <br />
              <input
                type="text"
                id="user"
                name="user"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label for="fname">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                onChange={(event) => {
                  setUserPassword(event.target.value);
                }}
              ></input>
            </div>
            <input type="submit" value="submit" />
            <Link className="createAccountLink" to="/register">
              don't have an account yet?
            </Link>
          </form>
        </div>
      )}
    </section>
  );
};
