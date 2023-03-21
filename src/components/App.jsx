import { Component } from 'react';
import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { ContactSearch } from './ContactSearch/ContactSearch';
const LS_KEY = 'Contacts';
const storage = JSON.parse(localStorage.getItem(LS_KEY));
export class App extends Component {
  state = {
    contacts: storage ? [...storage] : [],
    filter: '',
  };
  componentDidUpdate() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  }
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
