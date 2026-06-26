import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable";

import filterback from '../images/catalog_up_bg.png'
import filterchange from '../images/catalog_up_char1.png'

const imagesContext = require.context('../images/catalog_bgs', false, /\.(png|jpe?g|svg|gif)$/);
const imagePaths = imagesContext.keys().map(imagesContext);

export default function M_CatalogSearch ({
    searchInputValue: initialInput
}) {

    const [dataPosts, setDataPosts] = useState([])
    const [searchInputValue, setSearchInputValue] = useState(initialInput || '');

    //Данные получили
    useEffect(() => {
        getData().then(setDataPosts)
    }, [])

    //Данные отсортировали по дате
    //dataPosts.sort((a,b) => new Date(b.date) - new Date(a.date));

    function postPreview () {

        const nbspRegEx = /[\u202F\u00A0]/gm;
        const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=_`()]/gm;
        const searchInputLower = searchInputValue.toLowerCase();

        const clean = (str) => {
            return str.replaceAll(nbspRegEx, ' ').replaceAll(punctuationRegEx, '').toLowerCase();
        }

        let count = 0;
        if (dataPosts.length > 0) {
            return dataPosts.filter(
                (item) => clean(item.title).includes(searchInputLower) || clean(item.description).includes(searchInputLower)
            ) .map((post) => {
                count++;
                const isEven = count % 2 === 0;
                return (
                    <div key={post.id} className={isEven ? 'article art-bg2' : 'article' } style={{
                            backgroundImage: `url(${imagePaths[count - 1]})`
                        }}>
                        {isEven ? (
                            <>
                                <div className="article-promo-img promo-left"><img src={post.cover[0].url} /></div>
                                <div className="description-bg">
                                    <div className="description-content desc-right">
                                        <div className="description yellow-bg">
                                            <h2>{post.title}</h2>
                                            <p className="hyphens ">{post.description}</p>
                                        </div>
                                        <div className="article-button">
                                        <a href="./article_1.html" className="to-the-article"><span>К выпуску!</span></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="description-bg">
                                    <div className="description-content desc-left">
                                        <div className="description sky-bg">
                                            <h2>{post.title}</h2>
                                            <p className="hyphens">{post.description}</p>
                                        </div>
                                        <div className="article-button">
                                            <a href="./article_1.html" className="to-the-article"><span>К выпуску!</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-promo-img promo-right"><img src={post.cover[0].url} /></div>
                            </>
                        )}
                    </div>
                );
            })
        }
    }
    
    return (
        <>
            <section className="articles">
                { postPreview() }
            </section>
        </>
    )
}