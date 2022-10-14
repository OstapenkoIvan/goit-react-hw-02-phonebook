// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ContactListItem.module.css';

export default class ContactListItem extends Component {
  //   static propTypes = { second: third };

  deleteItem = id => {
    this.props.handleClick(id);
  };

  render() {
    const { id, name, number } = this.props.data;
    return (
      <li className={s.listItem}>
        <p className={s.pEl}>{name}</p>:{' '}
        <span className={s.spanEl}>{number}</span>
        <button
          className={s.btn}
          type="button"
          onClick={() => this.deleteItem(id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
