import { useEffect, useState } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedСontacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedСontacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const savedNamesList = contacts.map(contact => contact.name);

    if (savedNamesList.includes(name)) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(state => [...state, { id: nanoid(), name, number }]);
  };

  const deleteContact = currId => {
    setContacts(state => state.filter(contact => contact.id !== currId));
  };

  const handleChange = e => setFilter(e.target.value);

  const visibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <Section headTitle="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      {
        <Section title="Contacts">
          <Filter value={filter} onChange={handleChange} />
          <ContactList
            contacts={visibleContacts()}
            onDeleteContact={deleteContact}
          />
        </Section>
      }
    </>
  );
}
