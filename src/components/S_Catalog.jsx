import React from "react"

import M_Header from '../components/M_Header.jsx'
import M_Footer from '../components/M_Footer.jsx'
import M_CatalogPreview from '../components/M_CatalogPreview.jsx'

export default function S_Catalog (
   {menuLinksLeft, menuLinksRight}
) {
    return (
        <>
            <M_Header menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
            <main>
                <M_CatalogPreview />
            </main>
            <M_Footer menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
        </>
    )
}