import PropTypes from 'prop-types';
import { Button, Contacts, СontactItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <Contacts>
        {contacts.map(({ id, name, number }) => (
          <СontactItem>
            <span>
              {name}: {number}
            </span>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              delete
            </Button>
          </СontactItem>
        ))}
      </Contacts>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
