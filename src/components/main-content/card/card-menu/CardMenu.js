import React from 'react';
import './card-menu.scss';
import { IconButton } from '../../../shared/buttons-n-links/buttons-n-links';

function CardMenu() {
    return (
        <div className="card-menu">
            <IconButton iconClassName="fas fa-pencil-alt" title="Редактировать" />
            <IconButton iconClassName="far fa-trash-alt" title="Удалить" />
        </div>
    );
}

export default CardMenu;
