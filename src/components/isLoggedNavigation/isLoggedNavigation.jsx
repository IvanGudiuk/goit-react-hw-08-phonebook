import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userLogoutThunk } from 'redux/thunks';
import { RiLogoutCircleFill } from 'react-icons/ri';
import css from './isLoggedNavigation.module.css';

export const IsLoggedNavigation = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLogoutThunk());
  };

  return (
    <div className={css.wrapper}>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        Contacts
      </NavLink>
      <span className={css.userName}>Welcome, {userName}</span>
      <button type="button" className={css.btn} onClick={clickHandler}>
        <RiLogoutCircleFill className={css.icon} /> Logout
      </button>
    </div>
  );
};
