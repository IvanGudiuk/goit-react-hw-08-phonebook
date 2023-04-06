import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsThunk } from 'redux/thunks';
import { deleteContactThunk } from 'redux/thunks';
import css from './Contacts.module.css';

export function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const clickHandler = id => {
    dispatch(deleteContactThunk(id));
  };

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filteredContact.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          {name}: {phone}
          <button
            className={css.btn}
            onClick={() => clickHandler(id)}
            name={name}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
