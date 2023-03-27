import { useLocalStorage } from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './AddContact.module.css';

export function AddContact({ onSubmit }) {
  const [name, setName] = useLocalStorage('name', ' ');
  const [number, setNumber] = useLocalStorage('number', ' ');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const id = nanoid();
    onSubmit({ name, number, id });
    form.reset();
    setName('');
    setNumber('');
  };

  const inputChangeHandler = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={inputChangeHandler}
        value={name}
      />
      <label className={css.label}>Number</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={inputChangeHandler}
        value={number}
      />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}

AddContact.propTypes = {
  onSubmit: PropTypes.func,
};
