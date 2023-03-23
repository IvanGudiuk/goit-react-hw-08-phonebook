import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './AddContact.module.css';
const LS_KEY = 'formValue';

export class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem(LS_KEY));
    if (storage) this.setState({ name: storage.name, number: storage.number });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state && this.state.name !== '')
      localStorage.setItem(LS_KEY, JSON.stringify(this.state));
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = this.state.name;
    const number = this.state.number;
    const id = nanoid();
    this.props.onSubmit({ name, number, id });
    form.reset();
    localStorage.removeItem(LS_KEY);
    this.setState({ name: '', number: '' });
  };

  inputChangeHandler = e => {
    const data = e.target.name;
    const value = e.target.value;
    this.setState({ [data]: value });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.inputChangeHandler}
          value={this.state.name}
        />
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.inputChangeHandler}
          value={this.state.number}
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }
}
AddContact.propTypes = {
  onSubmit: PropTypes.func,
};
