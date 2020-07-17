import React from 'react';
import './buttons-n-links.scss';

function IconButton(props) {
    // button with label and cute icon
    return (
        <button type="button" className="icon-button">
            <img src={props.icon} />
            {props.title}
        </button>
    )
}

function TextButton(props) {
    // button with label only
    return (
        <button type="button" className="text-button">
            {props.title}
        </button>
    )
}

function NavigationButton(props) {
    // navigation links in menu that looks like buttons, with icons and label   
    const buttonClassName = props.className ? (props.className + " nav-button") : "nav-button"
    return (
        <a href={props.link} className={buttonClassName}>
            <i className={props.iconClassName} aria-hidden="true"></i>
            <span>{props.title}</span>
        </a>
    )
}

export { IconButton, TextButton, NavigationButton };
