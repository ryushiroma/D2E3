import React, { useState } from 'react';

/*Desafio 2 - Exercício 4*/
function App() {

  const contactArray = [
    { name: 'Diego' },
    { name: 'Gabriel' },
    { name: 'Lucas' }
  ]

  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { contacts: contactArray };

      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
      event.preventDefault();
      const { contacts } = this.state,
        name = this.refs.name.value;
      this.setState({
        contacts: [...contacts, { name }]
      }, () => { this.refs.name.value = '' });
    }
    render() {
      const { contacts } = this.state;

      return (
        <div>
          <h2>Add Someone</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="name" placeholder="name" />
            <button type="submit">Submit</button>
          </form>
          <h2>Existing contacts:</h2>
          <ul>
            {contacts.map((contact) =>
              <li>{`Name: ${contact.name}`}</li>
            )}
          </ul>
        </div>
      )
    }
  }
  

  return(
    <NameForm>
      
    </NameForm>
  )
}

export default App;