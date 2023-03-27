import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { ContactSearch } from './ContactSearch/ContactSearch';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const submitHandler = contact => {
    const names = contacts.map(obj => obj.name);
    if (!names.includes(contact.name)) {
      setContacts(prevState => [...prevState, contact]);
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  const onChangeHandle = word => {
    setFilter(word);
  };

  const filterHandler = () => {
    const search = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return search;
  };

  const contactDeleteHandler = e => {
    const id = e.target.name;
    const leftContacts = contacts.filter(contact => contact.id !== id);
    setContacts(leftContacts);
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
      <AddContact onSubmit={submitHandler} />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <ContactSearch onChange={onChangeHandle} />
      <Contacts
        contacts={filterHandler()}
        clickHandler={contactDeleteHandler}
      />
    </div>
  );
}
