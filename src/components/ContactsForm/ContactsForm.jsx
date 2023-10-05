import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { selectContacts } from 'redux/contacts/selectorsContacts';
import initialValues from 'utils/initialValues';

import {
  FormAddContact,
  InputField,
  Label,
  ButtonAddContact,
} from './ContactsForm.styled';
import { addContacts } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
// import { number } from 'yup';
import { schema } from 'utils/validationSchema';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInContacts = value =>
    contacts.some(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );
  const renameContact = value => {
    Notiflix.Confirm.prompt(
      'Rename a contact',
      'Rename the contact you want to create!',
      '',
      'Answer',
      'Cancel',
      function okCb(newName) {
        const result = nameInContacts({ name: newName });
        if (!result) {
          dispatch(addContacts({ name: newName, number: value.number }));
        } else {
          Notiflix.Notify.warning(
            `What you do? Name : ${newName} already exists !!!.😵 `,
            {
              timeout: 5000,
              distance: '60px',
            }
          );
        }
      }
    );
  };

  const onformSubmit = value => {
    const resultSearchNameContact = nameInContacts(value);
    if (resultSearchNameContact) {
      Notiflix.Notify.warning(`${value.name} is already in contacts.`, {
        timeout: 5000,
        distance: '60px',
      });
      renameContact(value);
    } else {
      dispatch(addContacts(value));
    }
  };

  const handleSubmit = (value, { resetForm }) => {
    onformSubmit(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormAddContact>
          <Label htmlFor="name">
            Name
            {touched.name && errors.name && <div>{errors.name}</div>}
            <InputField type="text" name="name" placeholder="First Name" />
          </Label>
          <Label htmlFor="number">
            Number
            {touched.number && errors.number && <div>{errors.number}</div>}
            <InputField type="text" name="number" placeholder="Number tel:" />
          </Label>
          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </FormAddContact>
      )}
    </Formik>
  );
};
