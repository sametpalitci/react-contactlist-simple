import React, { Component } from "react";
import "../App.css";
import Contacts from "./Contacts";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      contacts: [
        {
          name: 'Samet',
          phone: '123123'
        },
        {
          name: 'Samet1',
          phone: '0123123'
        }
      ]
    }
  }
  addContact = (contact) => {
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({ contacts });

    console.log(contacts);
  }
  render() {
    return (
      <div>
        <Contacts
          addContact={this.addContact}
          contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;