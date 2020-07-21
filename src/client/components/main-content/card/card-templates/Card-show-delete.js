import React, { useState } from 'react';
import axios from 'axios';
import giraffePhoto from '../../../../static/photo.jpg';
import { TextButton } from '../../../shared/buttons-n-links/buttons-n-links';
import './card-template.scss';

function CardShowDelete({ data, showMenu, children, CRUDmode, returnShowMode, updateRequest }) {
    const imageRef = React.useRef(null);

    // if (data.image.type === Blob.type) {
    //     const avatar = imageRef.current;
    // const reader = new FileReader();
    //     reader.onload = (function(aImg) {
    //         return function(e) {
    //             aImg.src = reader.result; 
    //         }; 
    //     })(avatar);
    // reader.readAsDataURL(data.image);}
 
    
    const deleteData = () => {
        console.log(data, 'delete this data');
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
          };
        axios.delete(`http://localhost:3000/api/giraffe/${data._id}`, data, axiosConfig)
            .then((response) => console.log(response))
            .catch((e) => console.log(e));
    
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
            <img src={giraffePhoto} alt="giraffe photo" className="giraffe-avatar" ref={imageRef} />
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
                <div>
                    <TextButton type="button" title="Удалить" className="delete-card-button" clickHandler={() => {deleteData(); updateRequest(true);}} />
                    <TextButton type="button" title="Отменить" className="revert-changes-button" clickHandler={() => returnShowMode()} />
                </div>
            }
        </div>
    )
};

export default CardShowDelete;
 