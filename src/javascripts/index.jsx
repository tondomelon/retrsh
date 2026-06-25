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
import S_Search from '../components/S_Search.jsx'
import S_Article from '../components/S_Article.jsx'

const routes = {
    '/': S_Main,
    '/index.html': S_Main,
    '/catalog.html': S_Catalog,
    '/search.html': S_Search,
    '/article_1.html': S_Article,
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