import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userCreateThunk } from 'redux/thunks';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      userCreateThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate('/contacts');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign in our App</h2>
      <form className={css.formRegister} onSubmit={submitHandler}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            className={css.input}
            placeholder="John Johnsen"
          />
        </label>
        <label className={css.label}>
          E-mail
          <input
            type="email"
            name="email"
            className={css.input}
            placeholder="Johnsen1990@gmail.com"
          />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </form>
    </div>
  );
};
