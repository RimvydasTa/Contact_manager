import React, {Component} from 'react';
import Contact from "./Contact";
import PropTypes from 'prop-types';

class Contacts extends Component {

    state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@email',
                    phone: '555-555-555'
                },
                {
                    id: 2,
                    name: 'Alan Doe',
                    email: 'alan@email',
                    phone: '111-555-555'
                },
                {
                    id: 3,
                    name: 'Rita Doe',
                    email: 'rita@email',
                    phone: '555-222-555'
                }
            ]
        };



    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key = {contact.id}
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        );
    };
};

Contacts.propTypes = {};

export default Contacts;
