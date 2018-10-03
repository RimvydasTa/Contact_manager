import React, { Component } from 'react'
import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from  '../../context';
import uuid from 'uuid';

 class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    };

  onChange = e => this.setState({
    [e.target.name] : e.target.value
  });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    //Check if fields valid
      if(name === ''){
          this.setState({
              error: {
                  name: 'Name is required'
              }
          });
          return;
      }
      if(email === ''){
          this.setState({
              error: {
                  email: 'Email is required'
              }
          });
          return;
      }
      if(phone === ''){
          this.setState({
              error: {
                  phone: 'Phone is required'
              }
          });
            return;
      }
    const newContact = {
        id: uuid(),
        name,
        email,
        phone
    };
    dispatch({type: 'ADD_CONTACT', payload: newContact});
    this.setState({
        name: '',
        email: '',
        phone: '',
        error: {}
    })
  };

  render() {
    const {name,email,phone, error} = this.state;
    return (
      <Consumer>
          {
              value => {
                  const {dispatch} = value;
                  return(
                      <div className="card mb-3">
                          <div className="card-header">Add Contact
                          </div>
                          <div className="card-body">
                              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup label="Name" onChange={this.onChange} value={name} placeholder="Enter name" name="name" error={error.name}/>
                                <TextInputGroup label="Email" onChange={this.onChange} value={email} placeholder="Enter email" name="email" type="email" error={error.email}/>
                                <TextInputGroup label="Phone" onChange={this.onChange} value={phone} placeholder="Enter phone" name="phone" error={error.phone}/>
                                <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                              </form>
                          </div>
                      </div>
                  );
              }
          }
      </Consumer>
    );
  }
}

export default AddContact;