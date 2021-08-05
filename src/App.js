import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import filterContacts from "./helpers/filterContacts";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contactsInLocal = localStorage.getItem("contacts");
    const parsedContactsInLocal = JSON.parse(contactsInLocal);
    if (parsedContactsInLocal) {
      this.setState({ contacts: parsedContactsInLocal });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = (contact) => {
    if (this.state.contacts.some((el) => el.name === contact.name)) {
      alert(this.state.name + " is already in contacts");
      return;
    }
    const inputId = uuidv4();
    this.setState((prev) => ({
      contacts: [...prev.contacts, { ...contact, id: inputId }],
    }));
  };

  handleDeleteContact = (event) => {
    this.setState({
      contacts: this.state.contacts.filter(
        (contact) => contact.id !== event.target.id
      ),
    });
  };
  handleFilterContact = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onFilter={this.handleFilterContact}
        />
        <ContactList
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
