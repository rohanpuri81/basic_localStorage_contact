import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContact = (data) => {
    setContacts([...contacts, { ...data, id: contacts.length + 1 }]);
    console.log(contacts);
  };
  return (
    <div>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
