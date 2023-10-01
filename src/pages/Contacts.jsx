import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { DotLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';
import { ContactsFilter } from 'components/ContactsFilter/CotactsFilter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import {
  selectContacts,
  selectError,
  selectISLoading,
} from 'redux/contacts/selectorsContacts';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectISLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {error && <p>Something went wrong, please reload the page :(</p>}
      {!error && <p>Add contacts here</p>}
      {!error && <ContactsForm />}
      {!error && <p>Contacts</p>}
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      {isLoading && !error && (
        <DotLoader
          color="#2dcf2d"
          cssOverride={{
            display: 'block',
            margin: '0 auto',
          }}
        />
      )}
      {contacts.length !== 0 && <ContactsFilter />}
      {contacts.length !== 0 && <ContactList />}
      {contacts.length === 0 && !error && (
        <p>Your contact list is empty yet...</p>
      )}
    </div>
  );
}
