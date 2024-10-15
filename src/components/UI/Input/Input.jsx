import classes from './Input.module.css';
import React from 'react';

export const Input = React.forwardRef((props, ref) => {
    return (
        <input className={classes.input} {...props} ref={ref}/>
    )
});