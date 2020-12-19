import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(modelObject) {
    
    const [values, setValues] = useState(modelObject);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () => {
        setValues(modelObject);
    }

    return {
        values,
        setValues,
        handleInputChange,
        resetForm
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, onSubmit, ...other } = props;
    return (
        <form className={classes.root}
            autoComplete="off"
            onSubmit={onSubmit}
            {...other}>
            {children}
        </form>
    )
}
