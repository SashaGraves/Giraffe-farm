import React from 'react';
import Card from '../card/Card';
import { giraffe, paddock } from '../../../data/paddocks';
import { maxNumberGiraffes } from '../../../data/user-data';
import CRUDkeyword from '../../../static/globals';
import ExhibitFill from './exhibit-fill/ExhibitFill';
import './exhibit.scss';

function Exhibit() {
    const [giraffeNumber, changeGiraffeNumber] = React.useState(paddock.length);
    
    const cardList = paddock.map(item => <Card key={item.id} data={item} crudMode="read" />);
    
    const [addingCard, toggleNewCard] = React.useState(false);

    const addCard = () => {
        if (giraffeNumber < maxNumberGiraffes) {
            toggleNewCard(true);
        } else {
            pass
        }
    }; 
        
    return (
        <div className="exhibit">
            <div className="exhibit-title">
                <h1>Жирафы</h1>
                {(giraffeNumber < maxNumberGiraffes) ? 
                <button type="button" onClick={addCard}><i className="fas fa-plus"></i></button>
                :
                <button type="button" disabled><i className="fas fa-plus"></i>Вольер заполнен</button>}
            </div>
            <div className="card-list">
                {addingCard && <Card crudMode="create" removeNewCard={() => toggleNewCard(false)} />}
                {cardList}
            </div>
            <ExhibitFill giraffeSum={giraffeNumber}/>
        </div>
    )
}

export default Exhibit;
