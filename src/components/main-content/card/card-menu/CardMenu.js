import React from 'react';
import './card-menu.scss';
import { IconButton } from '../../../shared/buttons-n-links/buttons-n-links';

function CardMenu({ editCard, deleteCard }) {
    return (
        <div className="card-menu">
            <IconButton iconClassName="fas fa-pencil-alt" title="Редактировать" clickHandler={editCard} />
            <IconButton iconClassName="far fa-trash-alt" title="Удалить" clickHandler={deleteCard} />
        </div>
    );
}

export default CardMenu;
