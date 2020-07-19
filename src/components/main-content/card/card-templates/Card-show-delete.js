import React, { useState } from 'react';
import giraffePhoto from '../../../../static/photo.jpg';
import { TextButton } from '../../../shared/buttons-n-links/buttons-n-links';
import './card-template.scss';

function CardShowDelete({ data, showMenu, children, CRUDmode, returnShowMode }) {
    const deleteData = () => {
        console.log(data, 'delete this data');
        returnShowMode();
    };
    return (
        <div className="card">
            {
                (CRUDmode === 'read') &&
                (<button type="button" onClick={showMenu} className="card-menu-button">
                    <i className="fas fa-ellipsis-h" />
                </button>)
            }
            {
                children
            }
            <img src={giraffePhoto} alt="giraffe photo" className="giraffe-avatar" />
            <h2 className="giraffe-name">
                {data.name}
            </h2>
            <div className="table">
                <ul className="table-header">
                    <li className="table-cell"><i className="fas fa-venus-mars" /></li>
                    <li className="table-cell"><i className="fas fa-balance-scale" /></li>
                    <li className="table-cell"><i className="fas fa-ruler-vertical" /></li>
                </ul>
                <ul className="table-row">
                    <li className="table-cell">
                        <span>{data.sex}</span>
                    </li>
                    <li className="table-cell">
                        <span>{data.weight}</span>
                    </li>
                    <li className="table-cell">
                        <span>{data.height}</span>
                    </li>
                </ul>
            </div>
            <ul className="description">
                <li>
                    <b>Цвет: </b>
                    <span>{data.color}</span>
                </li>
                <li>
                    <b>Диета: </b>
                    <span>{data.diet}</span>
                </li>
                <li>
                    <b>Характер: </b>
                    <span>{data.temper}</span>
                </li>
            </ul>
            
            {
                (CRUDmode === 'delete') &&
                <TextButton type="button" title="Удалить" className="delete-card-button" clickHandler={deleteData} />
            }
        </div>
    )
}

export default CardShowDelete;
 