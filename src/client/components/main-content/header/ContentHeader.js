import React from 'react';
import Profile from '../../shared/profile/Profile';
import { TabButton } from '../../shared/buttons-n-links/buttons-n-links';
import './content-header.scss';

function ContentHeader() {
    return (
        <div className="content-header">
            <div className="button-block">
                <TabButton className="active" title="Вольер 1" />
                <TabButton title="Вольер 2" />
                <TabButton title="Вольер 2" />
                <i className="fas fa-plus-circle" />
            </div>
            <div>
                <i className="far fa-bell" />
                <Profile username={false} />
            </div>
        </div>
    )
}

export default ContentHeader;
