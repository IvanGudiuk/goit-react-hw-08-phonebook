import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { ContactSearch } from './ContactSearch/ContactSearch';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();

  const contactDeleteHandler = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <ContactSearch />
      <Contacts clickHandler={contactDeleteHandler} />
    </div>
  );
}
