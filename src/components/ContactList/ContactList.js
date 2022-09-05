import React, { Component } from 'react';

export class ContactList extends Component {
  removeContact = id => {
    this.props.onClick(id);
  };

  render() {
    const arr = this.props.data;
    return arr.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <span>{number}</span>
        <button type="button" onClick={() => this.removeContact(id)}>
          Delete
        </button>
      </li>
    ));
  }
}

export default ContactList;
