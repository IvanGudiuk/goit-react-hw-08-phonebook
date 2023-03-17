import React, { Component } from 'react';
import css from './ContactSearch.module.css';

export class ContactSearch extends Component {
  inputHandler = e => {
    const search = e.target.value;
    this.props.onChange(search);
  };

  render() {
    return (
      <input className={css.input} name="search" onChange={this.inputHandler} />
    );
  }
}
