import { Routes, Route } from 'react-router-dom';
import { refreshThunk } from 'redux/thunks';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import { ContactSearch } from './ContactSearch/ContactSearch';
import { Layout } from './Layout/Layout';
import Register from 'pages/Register';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { Login } from 'pages/Login';
// import { Contacts } from 'pages/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactsList } from './ContactsList/ContactsList';
// import { userCreateThunk } from 'redux/thunks';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </div>
  );
}
