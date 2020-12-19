import React from 'react'
import { Button as MuiButton } from "@material-ui/core";

export default function Button(props) {

    const { text, color, variant, onClick, ...other } = props

    return (
        <MuiButton
            variant={variant || "contained"}
            color={color || "primary"}
            onClick={onClick}
            {...other}>
            {text}
        </MuiButton>
    )
}
