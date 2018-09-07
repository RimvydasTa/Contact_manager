import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './contact.css';


class Contact extends Component {
   

    state = {
        showContactInfo: false
    };

    onShowClick = (event) => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };
    onDeleteClick = () => {
            this.props.deleteClickHandler();
    };

    render() {
        const {name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
           <div className="card card-body mb-3">
                <h4>
                    {name} 
                    <i 
                      onClick={this.onShowClick} 
                      className={ showContactInfo ? "fas fa-sort-down": "fas fa-sort-up"}
                      style={{cursor: 'pointer'}}
                      >
                    </i>
                    <i 
                        className="fas fa-times" 
                        style={{cursor: 'pointer', float: 'right', color:'red'}} 
                        onClick={this.onDeleteClick}>
                    </i>
            </h4>
           {
               showContactInfo ? ( 
               <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className= "list-group-item">{phone}</li>
               </ul>
                 ): null 
            }
           
            
           </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired

};

export default Contact;