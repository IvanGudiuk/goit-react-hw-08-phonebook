import { AddContact } from 'components/AddContact/AddContact';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactSearch } from 'components/ContactSearch/ContactSearch';
import { Container } from 'components/Container/Container';
import { fetchContactsThunk } from 'redux/thunks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <AddContact />
      <ContactSearch />
      <ContactsList />
    </>
  );
};

export default Contacts;
