import { useState, useEffect } from 'react';

import signupStyles from '../../styles/Signup.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// useSelector allows us to select anything in the global state ex.. user, message etc.
// useDispatch allows us to dispatch actions like calling register func
// import { useSelector, useDispatch } from 'react-redux';
// import { register, reset } from '../features/auth/authSlice.js';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const { name, email, password, cpassword } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password != cpassword) {
      toast.error('Passwords do not match', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <section className={signupStyles.container}>
        <div className={signupStyles.main}>
          <h1 className={signupStyles.header}>
            Elevate your study habits today.
          </h1>
          <div className={signupStyles.signupbox}>
            <form onSubmit={onSubmit}>
              <h3 className={signupStyles.signupboxheader}>Register Now</h3>
              <div className={signupStyles.userbox}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                />
                <label>username</label>
              </div>
              <div className={signupStyles.userbox}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <label>email</label>
              </div>
              <div className={signupStyles.userbox}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <label>password</label>
              </div>
              <div className={signupStyles.userbox}>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  value={cpassword}
                  onChange={onChange}
                  required
                />
                <label>confirm password</label>
              </div>
              <button className={signupStyles.button}>ENGAGE</button>
            </form>
            <div className={signupStyles.alreadyRegistered}>
              <a href="/login">Have an account? Login here.</a>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;
