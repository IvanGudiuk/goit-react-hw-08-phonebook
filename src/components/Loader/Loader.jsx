import css from './Loader.module.css';
import { ImSpinner11 } from 'react-icons/im';

export function Loader() {
  return (
    <div className={css.backdrop}>
      <ImSpinner11
        className={css.spinner}
        color="rgba(0,0,0, 0.5)"
        width="30"
        height="30"
      />
    </div>
  );
}
