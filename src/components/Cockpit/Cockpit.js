import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //setTimeout(() => {
        //    alert('Saved Data to cloud');
        //}, 3000);
        return () => {
            console.log('[Cockpit.js] Clean up work in useEffect');
        };
    }, [props.persons]);

    const assignedClasses = [];

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push( classes.red );
    }
    if (props.personsLength <= 1) {
        assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{ props.title }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);