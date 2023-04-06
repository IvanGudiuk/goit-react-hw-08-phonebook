import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { addContactThunk } from '../../redux/thunks';
import css from './AddContact.module.css';

export function AddContact() {
  const [name, setName] = useLocalStorage('name', ' ');
  const [phone, setPhone] = useLocalStorage('phone', ' ');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const names = contacts.map(obj => obj.name);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const newContact = { name, phone };
    if (!names.includes(name)) {
      dispatch(addContactThunk(newContact));
    } else {
      alert(`${name} is already in contacts`);
    }
    setName('');
    setPhone('');
  };

  const inputChangeHandler = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  return (
    <section className={css.section}>
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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={inputChangeHandler}
          value={phone}
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </section>
  );
}
