import React from 'react';
import Profile from '../shared/profile/Profile';
import { NavigationButton } from '../shared/buttons-n-links/buttons-n-links';
import './menu.scss';

function Menu() {
    return (
        <div className="menu">
            <Profile username={true} />
            <nav>
                <NavigationButton title="Главная" iconClassName="fas fa-home" link="/"/>
                <NavigationButton title="Управление" iconClassName="fas fa-tasks" link="/" />
                <NavigationButton title="Жирафы" iconClassName="fas fa-horse-head" link="/" className="active" />
                <NavigationButton title="Сотрудники" iconClassName="fas fa-user-friends" link="/" />
                <NavigationButton title="Настройки" iconClassName="fas fa-cog" link="/" />
                <NavigationButton title="Поддержка" iconClassName="fas fa-tools" link="/" />
            </nav>
        </div>
    )
}

export default Menu;
