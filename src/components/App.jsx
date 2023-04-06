import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { ContactSearch } from './ContactSearch/ContactSearch';

export function App() {
  return (
    <div
      style={{
        height: '100vh',
        padding: 30,
        fontSize: 40,
        color: '#010101',
        textAlign: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <ContactSearch />
      <Contacts />
    </div>
  );
}
