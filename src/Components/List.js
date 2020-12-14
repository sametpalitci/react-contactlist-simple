import React, { Component } from "react";
import PropTypes from "prop-types";
import "./List.css";
class List extends Component {
    constructor(props) {
        super();
        this.state = {
            filterText: ''
        }
    }
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    onChange = (e) => {
        this.setState({ filterText: e.target.value })
    }
    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );
        return (
            <div>
                <input value={this.state.filterText}
                    onChange={this.onChange}
                    name={"filter"}
                    id={"filter"}
                    placeholder={"Filter by name or phone"} />


                <ul>
                    {
                        filteredContacts.map(contact => {
                            return (
                                <li key={contact.phone}>{contact.name} - {contact.phone}</li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;