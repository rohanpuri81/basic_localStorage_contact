import React from "react";

function ContactList({ contacts, ind }) {
  const contactList = contacts.map((val) => {
    return (
      <div key={`${val.name}${ind}`} className="contacts">
        <div>{val.name}</div>
        <div className="email">{val.email}</div>
        <span>Delete</span>
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
