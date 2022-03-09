import { useState } from "react";

const axios = require("axios");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post("/auth/login", {
      email: email,
      password: password,
    });
    const posts = await axios.get("/users/timeline", {
      headers: {
        authorization: "Bearer " + response.data.token,
      },
    });
    console.log(posts.data);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailInputHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordInputHandler}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Login;
