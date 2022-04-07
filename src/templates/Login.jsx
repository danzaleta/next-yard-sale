import React, { useRef } from "react";
import "@styles/Login.scss";
import logo from '@logos/logo_yard_sale.svg';



const Login = () => {
  const form = useRef(null);
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="main-form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" placeholder="user@email.com" name="email" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" placeholder="********" name="password" className="input input-password" />
          <input type="button" value="Login" className="primary-button login-button" onClick={handleSubmit} />
          <a href="/">Forgot my password</a>
          <button type="button" className="secondary-button signup-button">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
