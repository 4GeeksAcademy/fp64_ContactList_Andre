import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/flux';

function ContactCard({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(deleteContact(contact.id));
    }
  };

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ContactCard;