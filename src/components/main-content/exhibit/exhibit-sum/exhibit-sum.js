import React from 'react';
import './exhibit-sum.scss';

function ExhibitSum({ giraffeSum }) {
    const [sumVisibility, changeSumVisibility] = React.useState(false);
    const sumClassName = `exhibit-sum ${sumVisibility ? 'visible' : 'hidden'}`;
    const exhibitFillPercent = Math.round(giraffeSum / 8 * 100);
    return (
        <div className={sumClassName}>
            <button type="button" onClick={() => changeSumVisibility(!sumVisibility)} className="open-sum-button">
                {sumVisibility ? <i className="fas fa-times" /> : <i className="fas fa-arrow-up" />}
            </button>
            <span className="exhibit-fill-percents">{`${exhibitFillPercent}%`}</span>
            <h2>Заполнение вольера</h2>
        </div>
    );
}

export default ExhibitSum;
