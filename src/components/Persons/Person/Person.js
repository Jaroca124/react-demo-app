import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    static contextType = AuthContext;

    componentDidMount() {
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');  
        return (
            <React.Fragment>
                { this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;