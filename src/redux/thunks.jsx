import {
  fetchContactsService,
  addContactService,
  deleteContactService,
} from 'services/fetchContacts';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await fetchContactsService();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const data = await addContactService(contact);
    return data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const data = await deleteContactService(id);
    return data;
  }
);
