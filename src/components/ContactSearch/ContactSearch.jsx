import PropTypes from 'prop-types';
import css from './ContactSearch.module.css';

export function ContactSearch({ onChange }) {
  const inputHandler = e => {
    const { value } = e.target;
    onChange(value);
  };

  return <input className={css.input} name="search" onChange={inputHandler} />;
}
ContactSearch.propType = {
  onChange: PropTypes.func,
};
