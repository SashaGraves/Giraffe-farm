import React from 'react';
import Menu from './menu/Menu';
import MainContent from './main-content/MainContent';
import './app.scss';

function App() {
    return (
        <div className="app-grid">
            <Menu />
            <MainContent />
        </div>
    )
}

export default App;
