import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const localStorageKey = "contact";
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey));
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (data) => {
    setContacts([...contacts, { ...data, id: contacts.length + 1 }]);
    console.log(contacts);
  };
  const removeContact = (id) => {
    setContacts(contacts.filter((val) => val.id != id));
  };
  return (
    <div>
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} removeContact={removeContact} />
    </div>
  );
}

export default App;
