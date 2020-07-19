import React, { useState } from 'react';

function InputField({ name, className, label, placeholder, value, onChangeHandler, maxValue }) {
    const [isPlaceholder, togglePlaceholder] = React.useState(true);
    let customPlaceholder = isPlaceholder ? placeholder : '';
    
    return (
    <input 
        name={name}
        type='text' 
        className={className} 
        aria-label={label}
        placeholder={customPlaceholder} 
        onFocus={() => togglePlaceholder(false)} 
        onBlur={() => togglePlaceholder(true)}
        autoComplete="off"
        value={value}
        onChange={(e) => onChangeHandler(e)}
        maxLength={maxValue}
    />
    );
}

export default InputField;
 