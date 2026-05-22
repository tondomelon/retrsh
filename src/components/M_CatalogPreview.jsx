import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable";

import filterback from '../images/catalog_up_bg.png'
import filterchange from '../images/catalog_up_char1.png'

const imagesContext = require.context('../images/catalog_bgs', false, /\.(png|jpe?g|svg|gif)$/);
const imagePaths = imagesContext.keys().map(imagesContext);

export default function M_CatalogPreview () {

    const [dataPosts, setDataPosts] = useState([])

    //Данные получили
    useEffect(() => {
        getData().then(setDataPosts)
    }, [])

    //Данные отсортировали по дате
    //dataPosts.sort((a,b) => new Date(b.date) - new Date(a.date));

    function postPreview () {
        let count = 0;
        const postPublic = []
        dataPosts.forEach((post) => {
            postPublic.push(post);
        })
        if (postPublic.length > 0) {
            return postPublic.map((post) => {
                count++;
                const isEven = count % 2 === 0;
                return (
                    <div key={post.id} className={isEven ? 'article art-bg2' : 'article' } style={{
                            backgroundImage: `url(${imagePaths[count - 1]})`
                        }}>
                        {isEven ? (
                            <>
                                <div className="article-promo-img promo-left boxShadow_yellow"><img src={post.cover[0].url} /></div>
                                <div className="description-bg">
                                    <div className="description-content desc-right">
                                        <div className="description yellow-bg">
                                            <h2>{post.title}</h2>
                                            <p className="hyphens ">{post.description}</p>
                                        </div>
                                        <div className="article-button">
                                        <a href={post.link} className="to-the-article"><span>К выпуску!</span></a>
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
                                            <p className="hyphens ">{post.description}</p>
                                        </div>
                                        <div className="article-button">
                                            <a href={post.link} className="to-the-article"><span>К выпуску!</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-promo-img promo-right boxShadow_sky"><img src={post.cover[0].url} /></div>
                            </>
                        )}
                    </div>
                );
            })
        }
    }
    
    return (
        <>
            <section className="choose-theme">
                <div className="choose-theme_container">
                    <h2 className="mainTitle-blue">Выбери свой интерес</h2>
                    <div className="filter-container">
                        <div className="filter-container-edit"> <span className="music">музыка</span></div>
                        <div className="filter-container-edit filter-container-editRight"><span className="games">игры</span></div>
                        <div className="filter-container-edit"><span className="stars">звезды</span></div>
                        <div className="filter-container-edit filter-container-editRight"><span className="creativity">творчество</span></div>
                    </div>
                </div>
                <div className="catalog_up_bg-img"><img src={filterback} /></div>
                <div className="catalog_up_change-img"><img src={filterchange} /></div>
            </section>
            <section className="filter-catalog">
                <div className="filter_container">
                    <div className="filter-with"><p>Сортировать по:</p></div>
                    <div className="filter-wrap">
                        <div className="filter-active active">
                            <div className="chooseOne yellow-bg">дата выхода</div>
                        </div>
                        <div className="filter-choose">
                            <div className="chooseOne yellow-bg">дата выхода</div>
                            <div className="chooseOne sky-bg">спец-выпуски</div>
                            <div className="chooseOne orange-bg">популярно</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="articles">
                { postPreview() }
            </section>
        </>
    )
}