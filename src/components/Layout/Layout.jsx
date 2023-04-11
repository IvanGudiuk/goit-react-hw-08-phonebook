import css from './Layout.module.css';
import { NavLink } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Navigation } from '../Navigation/Navigation';
import { IsLoggedNavigation } from 'components/isLoggedNavigation/isLoggedNavigation';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiFillHome } from 'react-icons/ai';

export const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  return (
    <>
      <header className={css.navbar}>
        <div className={css.container}>
          <div className={css.wrapper}>
            <h1 className={css.title}>
              Phone<span className={css.span}>book</span>
            </h1>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.link}`
              }
            >
              <AiFillHome className={css.icon} />
            </NavLink>
          </div>
          <nav className={css.nav}>
            {isLoggedIn ? <IsLoggedNavigation /> : <Navigation />}
          </nav>
        </div>
      </header>
      <section className={css.sec}>
        <Outlet />
      </section>
      {isLoading && <Loader />}
      {isRefreshing && <Loader />}
    </>
  );
};
