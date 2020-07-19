import React from 'react';
import './exhibit-fill.scss';
import ProgressBar from '../../../shared/progress-bar/ProgressBar';
import { maxNumberGiraffes } from  '../../../../data/user-data';
import { TextButton } from '../../../shared/buttons-n-links/buttons-n-links';

function ExhibitFill({ giraffeSum }) {
    const [sumVisibility, changeSumVisibility] = React.useState(false);
    const sumClassName = `exhibit-fill ${sumVisibility ? 'visible' : 'hidden'}`;
    const exhibitFillRate = Math.round(giraffeSum / maxNumberGiraffes * 100);
    const exhibitFillPercent = `${exhibitFillRate}%`;
    return (
        <div className={sumClassName}>
            <button type="button" onClick={() => changeSumVisibility(!sumVisibility)} className="open-sum-button">
                {sumVisibility ? <i className="fas fa-times" /> : <i className="fas fa-arrow-up" />}
            </button>
            <span className="exhibit-fill-percents hide-me">{exhibitFillPercent}</span>
            <h2>Заполнение вольера</h2>
            <ProgressBar fillPercents={exhibitFillPercent} className="hide-me" />
            <TextButton title="Информация" className="hide-me" />
        </div>
    );
}

export default ExhibitFill;
