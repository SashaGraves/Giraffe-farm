import React, { useState } from 'react';

function InputField({ type, name, className, label, placeholder, value, onChangeHandler, maxValue, max, min }) {
    const [isPlaceholder, togglePlaceholder] = React.useState(true);
    let customPlaceholder = isPlaceholder ? placeholder : '';
    
    return (
    <input 
        name={name}
        type={type} 
        className={className} 
        aria-label={label}
        placeholder={customPlaceholder} 
        onFocus={() => togglePlaceholder(false)} 
        onBlur={() => togglePlaceholder(true)}
        autoComplete="off"
        value={value}
        onChange={(e) => onChangeHandler(e)}
        maxLength={maxValue}
        min={min}
        max={max}
    />
    );
}

export default InputField;
 