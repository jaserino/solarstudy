import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import registerStyles from '../../styles/pagesCSS/Register.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../features/auth/authSlice.jsx';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const { name, email, password, cpassword } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          toast.success(`Thanks for joining - ${user.name}`);
          navigate('/profile');
        })
        .catch(toast.error, {
          position: toast.POSITION.TOP_CENTER,
          theme: 'dark',
        });
    }
  };

  return (
    <>
      <section className={registerStyles.container}>
        <div className={registerStyles.main}>
          <h1 className={registerStyles.header}>
            Elevate your study habits today.
          </h1>
          <div className={registerStyles.signupbox}>
            <form onSubmit={onSubmit}>
              <h3 className={registerStyles.signupboxheader}>Register Now</h3>
              <div className={registerStyles.userbox}>
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
              <div className={registerStyles.userbox}>
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
              <div className={registerStyles.userbox}>
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
              <div className={registerStyles.userbox}>
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
              <button className={registerStyles.button}>ENGAGE</button>
            </form>
            <div className={registerStyles.alreadyRegistered}>
              <a className={registerStyles.loginhere} href="/login">
                Have an account? Login here!
              </a>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Register;
