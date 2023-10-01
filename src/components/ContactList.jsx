import React from "react";

function ContactList({ contacts, removeContact }) {
  const contactList = contacts.map((val, ind) => {
    return (
      <div key={`${val.name}${ind}`} className="contacts">
        <div>{val.name}</div>
        <div className="email">{val.email}</div>
        <span
          onClick={() => {
            removeContact(val.id);
          }}
        >
          Delete
        </span>
      </div>
    );
  });
  return (
    <div>
      <div>ContactList</div>
      <div>{contactList}</div>
    </div>
  );
}

export default ContactList;
