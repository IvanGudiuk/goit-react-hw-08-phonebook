import PropTypes from 'prop-types';
import css from './Contacts.module.css';
export function Contacts({ contacts, clickHandler }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}{' '}
          <button className={css.btn} onClick={clickHandler} name={id}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  clickHandler: PropTypes.func,
};
