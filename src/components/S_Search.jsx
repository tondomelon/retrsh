import React from "react"

import M_Header from '../components/M_Header.jsx'
import M_Footer from '../components/M_Footer.jsx'
import M_CatalogSearch from '../components/M_CatalogSearch.jsx'
import M_Search from "../components/M_Search.jsx"

function getSearchRequest () {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    if (searchParams.has('q')) {
        return searchParams.get('q')
    }
    else {
        return '';
    }
}

export default function S_Catalog (
   {menuLinksLeft, menuLinksRight}
) {
    
    return (
        <>
            <M_Header menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
            <M_Search />
            <main>
                <M_CatalogSearch searchInputValue={getSearchRequest} />
            </main>
            <M_Footer menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
        </>
    )
}