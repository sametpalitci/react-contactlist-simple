import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func
    }
    constructor(props) {
        super();
        this.state = {
            name: '',
            phone: ''
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        this.props.addContact({ ...this.state })
        this.setState({name:'', phone:''})
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name={"name"} id={"name"} value={this.state.name} onChange={this.onChange} placeholder={"Enter a name"} />
                    <br />
                    <input name={"phone"} id={"phone"} value={this.state.phone} onChange={this.onChange} placeholder={"Enter a phone number"} />
                    <br />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
export default Form;