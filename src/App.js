import React, { Component } from "react";
import "./App.css";

class App extends Component {
 
  state = {
      name: "",
      number: "",
      addressBook: []
    };
   
  handleInputChange1 = (event) => {
      this.setState({
        name: event.target.value
      });
    };

  handleInputChange2 = (event) => {
      this.setState({
        number: event.target.value
      });
    };

  addContact = () => {
      const newContact = {
        name: this.state.name,
        number: this.state.number
      };

      if (this.state.name === "" || this.state.number === "") {
        alert("Both fields are required.");
        return;
      }

      this.setState(clearField => ({
        addressBook: clearField.addressBook.concat(newContact),
        name: "",
        number: ""
      }));
    };
  

  render() {
    let form = (
      <div className = "container">
        <input
          className = "nameInput"
          type="text"
          onChange={this.handleInputChange1}
          value={this.state.name}
          placeHolder="Name"
        />

        <input
          className = "numInput"
          type="text"
          onChange={this.handleInputChange2}
          value={this.state.number}
          placeHolder="Number"
        />

        <button className = "contactBtn" type="button" onClick={this.addContact}>
          Add Contact
        </button>
      </div>
    );

    return (
      <div className= "header">
        <h1>Lauren's Address Book</h1>
        {form}
        {this.state.addressBook.map(contact => (
          <div className="contacts">
            <h2>{contact.name}</h2>
            <p>{contact.number}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
