import React, { useState } from 'react';
import CardMenu from './card-menu/CardMenu';
import CardShow from './card-templates/Card-show';
import CRUDkeyword from '../../../static/globals';

function Card({ data, crudMode }) {
    const [menuVisible, toggleMenu] = React.useState(false);
    const [cardMode, setCardMode] = React.useState(crudMode);
    const showMenu = () => {
        toggleMenu(!menuVisible);
    };
    
    const editCard = (cardId) => {
        console.log('Edit card, id ' + cardId);
        setCardMode(CRUDkeyword[3]);
    };
    
    const deleteCard = (cardId) => {
        console.log('Delete card, id ' + cardId);
        setCardMode(CRUDkeyword[4]);
    };
    
    if (cardMode === 'create') {
        return (
            <div>Create new Card</div>
        )
    } else if (cardMode === 'read') {
        return (
            <CardShow 
                data={data} 
                showMenu={showMenu} 
                menuVisible={menuVisible} 
            >
                {
                    (menuVisible) && 
                    <CardMenu editCard={() => editCard(data.id)} deleteCard={() => deleteCard(data.id)} />
                }
            </CardShow>
        );
    } else if (cardMode === 'update') {
        return (
            <div>Edit this card</div>
        )
    } else if (cardMode === 'delete') {
        return (
            <div>Delete this card</div>
        )
    }
    return (<div>Something gone wrong</div>)
}

export default Card;
 