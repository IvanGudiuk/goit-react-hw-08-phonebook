import { Component } from 'react';
import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { ContactSearch } from './ContactSearch/ContactSearch';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = contact => {
    const names = this.state.contacts.map(obj => obj.name);
    if (!names.includes(contact.name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts`);
    }
  };

  onChangeHandle = word => {
    this.setState({ filter: word });
  };

  filterHandler() {
    const search = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return search;
  }

  contactDeleteHandler = e => {
    const id = e.target.name;
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  };

  render() {
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
        <AddContact onSubmit={this.submitHandler} />
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <ContactSearch onChange={this.onChangeHandle} />
        <Contacts
          contacts={this.filterHandler()}
          clickHandler={this.contactDeleteHandler}
        />
      </div>
    );
  }
}
