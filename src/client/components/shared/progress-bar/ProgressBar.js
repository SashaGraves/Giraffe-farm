import React from 'react';
import './progress-bar.scss';

function ProgressBar({ fillPercents, className }) {
    const progressStyle = {
        width: fillPercents
    };
    return (
        <div className={`progress-bar ${className}`}>
            <div className="progress-line" style={progressStyle} />
        </div>
    );
}

export default ProgressBar;
