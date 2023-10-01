import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacrtList } from 'redux/contacts/selectorsContacts';

export const ContactList = () => {
  const contactsList = useSelector(selectContacrtList);

  return (
    <ul>
      {contactsList.length > 0 &&
        contactsList.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} id={id} number={number} />
        ))}
    </ul>
  );
};
