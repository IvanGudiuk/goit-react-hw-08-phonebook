import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';
import { AiTwotoneDelete } from 'react-icons/ai';
import css from './Contacts.module.css';

export function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const capitalizeFirstLetter = str => {
    const words = str.split(' ');
    const firstWord = words[0];
    const firstLetter = firstWord.charAt(0).toUpperCase();
    return firstLetter;
  };

  const getRandomHexColor = (excludedColors = []) => {
    const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (excludedColors.includes(hexColor)) {
      return getRandomHexColor(excludedColors);
    }
    return hexColor;
  };

  const clickHandler = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <>
      {filteredContact.length === 0 ? (
        <p className={css.text}>You don't have any contacts</p>
      ) : (
        <ul className={css.list}>
          {filteredContact.map(({ id, name, number }) => (
            <li className={css.item} key={id}>
              <span
                className={css.avatar}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                {capitalizeFirstLetter(name)}
              </span>
              <span className={css.name}>{name}:</span>&nbsp;{number}
              <button
                className={css.btn}
                onClick={() => clickHandler(id)}
                name={name}
              >
                <AiTwotoneDelete className={css.icon} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
