import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { FadeLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsFilter } from 'components/ContactsFilter/CotactsFilter';
import {
  selectContacts,
  selectError,
  selectISLoading,
} from 'redux/contacts/selectorsContacts';
import { fetchContacts } from 'redux/contacts/operations';
import {
  Container,
  TitleContacts,
  TitlePhoneBook,
  Wrapper,
} from 'components/App/App.styled';

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
      {error && <p>Something went wrong, please reload the page!</p>}
      {isLoading && !error && (
        <FadeLoader
          color="#36d7b7"
          height={20}
          cssOverride={{
            display: 'block',
            margin: '0 auto',
          }}
        />
      )}
      {!error && (
        <Wrapper>
          <Container>
            <TitlePhoneBook>Phonebook</TitlePhoneBook>
            <ContactsForm />
          </Container>
          <Container>
            <TitleContacts>Contacts</TitleContacts>
            {contacts.length === 0 && !error && (
              <p>Your contact list is empty yet...</p>
            )}
            {contacts.length > 1 && <ContactsFilter />}
            <ContactList />
          </Container>
        </Wrapper>
      )}
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
    </div>
  );
}
