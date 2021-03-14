import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { fetchUser } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.auth);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
    fetchUser(email, password);
  };
  const renderError = () => {
    return (
      <article className="message is-small is-danger">
        <div className="message-body">{error}</div>
      </article>
    );
  };
  return (
    <div className="login-wrapper">
      <p className="title is-1">Admin Login</p>
      <p className="subtitle is-3">Youth Activism Application Dashboard</p>
      <form onSubmit={handleSubmit}>
        <input
          className="input is-medium"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="input is-medium"
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={password}
        />
        {error ? renderError() : null}
        <button className="button is-success" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
