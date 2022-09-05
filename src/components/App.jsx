import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  static propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <section>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />

          <ul>
            <ContactList data={visibleContacts} onClick={this.removeContact} />
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
