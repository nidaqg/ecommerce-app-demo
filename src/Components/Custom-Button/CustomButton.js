import React from 'react';
import "./CustomButtonStyles.scss";

export const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

