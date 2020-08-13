import React from 'react';
import module from './index.module.scss'

const Cookies = () => {
    return (
        <div className={module.cookies} >
        <div>Ta strona używa plików cookies. <a class="open">Kliknij</a> po więcej informacji.</div>
        <button onclick="Cookies.accepted()">Rozumiem</button>
    </div>
    );
}

export default Cookies;
