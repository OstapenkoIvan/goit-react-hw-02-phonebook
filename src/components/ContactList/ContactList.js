import React, { Component } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import s from './ContactList.module.css';

export class ContactList extends Component {
  removeContact = id => {
    this.props.onClick(id);
  };

  render() {
    const arr = this.props.data;

    return (
      <ul className={s.list}>
        {arr.map(item => (
          <ContactListItem
            key={item.id}
            data={item}
            handleClick={this.removeContact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
