import { userLoginThunk } from 'redux/thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      userLoginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate('/');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Enter your account</h2>
      <form className={css.formRegister} onSubmit={submitHandler}>
        <label className={css.label}>
          E-mail
          <input type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.btn}>
          Login
        </button>
      </form>
    </div>
  );
};
