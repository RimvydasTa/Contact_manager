import React, {Component} from 'react';
import Contact from "./Contact";
import {Consumer} from '../../context';
import PropTypes from 'prop-types';

class Contacts extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return (
                        <React.Fragment>
                             {contacts.map(contact => (
                                <Contact
                                    key = {contact.id}
                                    contact={contact}
                                />
                                ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    };
};

Contacts.propTypes = {};

export default Contacts;
