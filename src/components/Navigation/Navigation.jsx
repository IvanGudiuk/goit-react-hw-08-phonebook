import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { RiLoginCircleFill } from 'react-icons/ri';
import { RxPencil2 } from 'react-icons/rx';

export const Navigation = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.link}`
          }
        >
          <RxPencil2 className={css.icon} />
          Register
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.link}`
          }
        >
          <RiLoginCircleFill className={css.icon} />
          Login
        </NavLink>
      </li>
    </ul>
  );
};
