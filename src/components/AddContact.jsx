import React, { useState } from "react";

function AddContact({ addContact }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
  });
  const handleAdd = () => {
    if (contactData.name == "" || contactData.email == "") {
      alert("Please fill all the details");
    } else {
      addContact(contactData);
      setContactData({ name: "", email: "" });
    }
  };
  return (
    <div className="formHeader">
      <div className="add-contact">Add Contact</div>
      <form>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={contactData.name}
          onChange={(e) =>
            setContactData({ ...contactData, name: e.target.value })
          }
        />
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={contactData.email}
          onChange={(e) =>
            setContactData({ ...contactData, email: e.target.value })
          }
        />
      </form>
      <button className="btn" onClick={handleAdd}>
        Add Contact
      </button>
    </div>
  );
}

export default AddContact;
