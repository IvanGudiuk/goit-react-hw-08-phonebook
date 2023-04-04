import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from './Contacts.module.css';

export function Contacts({ clickHandler }) {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.value);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContact.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
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

Contacts.propTypes = {
  clickHandler: PropTypes.func,
};
