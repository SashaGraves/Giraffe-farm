import React from 'react';
import Card from '../card/Card';
import { giraffe, paddock } from '../../../data/paddocks';
import { maxNumberGiraffes } from '../../../data/user-data';
import CRUDkeyword from '../../../static/globals';
import ExhibitSum from './exhibit-sum/exhibit-sum';
import './exhibit.scss';

function Exhibit() {
    const [giraffeNumber, changeGiraffeNumber] = React.useState(paddock.length);
    
    const cardList = paddock.map(item => <Card key={item.id} data={item} crudMode={CRUDkeyword[2]} />);
    
    const [addingCard, toggleNewCard] = React.useState(false);
    const newCard = <div>Here is new card</div>;

    const addCard = () => {
        console.log('I hear u');
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
                {addingCard && newCard}
                {cardList}
            </div>
            <ExhibitSum giraffeSum={giraffeNumber}/>
        </div>
    )
}

export default Exhibit;
