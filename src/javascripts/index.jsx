import React from "react";
import { createRoot } from "react-dom/client";


const menuLinksLeft = [
    {'title': 'Каталог',
    'link': 'catalog.html',
    },

    {'title': 'Рандомный выпуск',
    'link': '',
    },

]

const menuLinksRight = [
    {'title': 'Телеграм',
    'link': 'https://t.me/retrash',
    },

    {'title': 'о нас',
    'link': 'about-us.html',
    },

]


import S_Main from '../components/S_Main.jsx'
import S_Catalog from '../components/S_Catalog.jsx'

const routes = {
    '/': S_Main,
    '/index.html': S_Main,
    '/catalog.html': S_Catalog,
}

const App = () => {
    const {pathname} = window.location;

    let PageCompoment = routes[pathname] || S_Error404;

    return (
    <PageCompoment 
        menuLinksLeft={menuLinksLeft} 
        menuLinksRight={menuLinksRight}
    />)
}

const app = document.querySelector('#app');
const root = createRoot(app)
root.render(<App />)