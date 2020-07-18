import React from 'react';
import Card from '../card/Card';
import { giraffe } from '../../../data/paddocks';
import './exhibit.scss';

function Exhibit() {
    return (
        <div className="exhibit">
            <div className="exhibit-title">
                <h1>Жирафы</h1>
                <button type="button"><i className="fas fa-plus"></i></button>
            </div>
            <div className="card-list">
                <Card data={giraffe} />
                <Card data={giraffe} />
            </div>
        </div>
    )
}

export default Exhibit;
