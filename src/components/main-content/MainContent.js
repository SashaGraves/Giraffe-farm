import React from 'react';
import './main-content.scss';
import ContentHeader from './header/ContentHeader';
import Exhibit from './exhibit/Exhibit';

function MainContent() {
    return (
        <main>
            <ContentHeader />
            <Exhibit />
        </main>
    )
}

export default MainContent;
 