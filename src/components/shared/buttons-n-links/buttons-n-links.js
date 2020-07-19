import React from 'react';
import './buttons-n-links.scss';

function IconButton(props) {
    // button with label and cute icon
    return (
        <button type="button" className="icon-button" onClick={props.clickHandler}>
            <i className={props.iconClassName} aria-hidden="true" />
            <span>{props.title}</span>
        </button>
    )
}

function TextButton(props) {
    // button with label only
    return (
        <button type={props.type} className={`text-button ${props.className}`} onClick={props.clickHandler} disabled={props.disabled}>
            {props.title}
        </button>
    )
}

function NavigationButton(props) {
    // navigation links in menu that looks like buttons, with icons and label   
    const buttonClassName = props.className ? (props.className + " nav-button") : "nav-button"
    return (
        <a href={props.link} className={buttonClassName}>
            <i className={props.iconClassName} aria-hidden="true" />
            <span>{props.title}</span>
        </a>
    )
}

function TabButton(props) {
    // tab buttons in header of main content
    const buttonClassName = props.className ? (props.className + " tab-button") : "tab-button"
    return (
    <button type="button" className={buttonClassName}>
        {props.title}
    </button>
    )
}

export { IconButton, TextButton, NavigationButton, TabButton };
