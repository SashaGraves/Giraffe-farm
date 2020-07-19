import React, { useState } from 'react';
import CardMenu from './card-menu/CardMenu';
import CardShowDelete from './card-templates/Card-show-delete';
import CardAddUpdate from './card-templates/Card-add-update';
import CRUDkeyword from '../../../static/globals';

function Card(props) {
    const [menuVisible, toggleMenu] = React.useState(false);
    const [cardMode, setCardMode] = React.useState(props.crudMode);

    const showMenu = () => {
        toggleMenu(!menuVisible);
    };
    
    const editCard = (cardId) => {
        console.log('Edit card, id ' + cardId);
        setCardMode('update');
        toggleMenu(false);
    };
    
    const deleteCard = (cardId) => {
        console.log('Delete card, id ' + cardId);
        setCardMode('delete');
        toggleMenu(false);
    };
    
    const returnShowMode = () => {
        setCardMode('read');
        toggleMenu(false);
    };
    
    if (cardMode === 'create') {
        return (
            <CardAddUpdate 
                returnShowMode={props.removeNewCard}
                data={{
                    name: '',
                    weight: '',
                    sex: '',
                    height: '',
                    color: '',
                    diet: '',
                    temper: '',
                    image: ''
                }}
                CRUDmode={cardMode}
            />
        )
    } else if (cardMode === 'read') {
        return (
            <CardShowDelete 
                data={props.data} 
                showMenu={showMenu} 
                menuVisible={menuVisible} 
                CRUDmode={cardMode}
            >
                {
                    (menuVisible) && 
                    <CardMenu editCard={() => editCard(props.data.id)} deleteCard={() => deleteCard(props.data.id)} />
                }
            </CardShowDelete>
        );
    } else if (cardMode === 'update') {
        return (
            <CardAddUpdate 
                returnShowMode={returnShowMode}
                data={props.data}
                CRUDmode={cardMode}
            />
        )
    } else if (cardMode === 'delete') {
        return (
            <CardShowDelete 
                data={props.data} 
                showMenu={showMenu} 
                menuVisible={menuVisible} 
                CRUDmode={cardMode}
                returnShowMode={returnShowMode}
            >
                {
                    (menuVisible) && 
                    <CardMenu editCard={() => editCard(props.data.id)} deleteCard={() => deleteCard(props.data.id)} />
                }
            </CardShowDelete>
        )
    }
    return (<div>Something gone wrong</div>)
}

export default Card;
 