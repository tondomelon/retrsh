import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable";

import filterback from '../images/catalog_up_bg.png'
import filterchange from '../images/catalog_up_char1.png'

export default function M_CatalogPreview () {

    const [dataPosts, setDataPosts] = useState([])

    //Данные получили
    useEffect(() => {
        getData().then(setDataPosts)
    }, [])

    //Данные отсортировали по дате
    //dataPosts.sort((a,b) => new Date(b.date) - new Date(a.date));

    function postPreview () {
        const postPublic = []
        dataPosts.forEach((post) => {
            postPublic.push(post);
        })

        if (postPublic.length > 0) {
            return postPublic.map((post) => (
                <div key={post.id} class="article" style={{
                    backgroundImage: `url(${post.backgroud[0].url})`
                }}>
                    <div class="description-bg">
                        <div class="description-content desc-left">
                            <div class="description sky-bg">
                                <h2>{post.title}</h2>
                                <p class="hyphens ">{post.description}</p>
                            </div>
                            <div class="article-button">
                                <a href={post.link} class="to-the-article"><span>К выпуску!</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="article-promo-img promo-right boxShadow_sky"><img src={post.cover[0].url} /></div>
                </div>
            ))
        }
    }
    
    return (
        <>
            <section class="choose-theme">
                <div class="choose-theme_container">
                    <h2 class="mainTitle-blue">Выбери свой интерес</h2>
                    <div class="filter-container">
                        <div class="filter-container-edit"> <span class="music">музыка</span></div>
                        <div class="filter-container-edit filter-container-editRight"><span class="games">игры</span></div>
                        <div class="filter-container-edit"><span class="stars">звезды</span></div>
                        <div class="filter-container-edit filter-container-editRight"><span class="creativity">творчество</span></div>
                    </div>
                </div>
                <div class="catalog_up_bg-img"><img src={filterback} /></div>
                <div class="catalog_up_change-img"><img src={filterchange} /></div>
            </section>
            <section class="filter-catalog">
                <div class="filter_container">

                    <div class="filter-with"><p>Сортировать по:</p></div>
                    <div class="filter-wrap">
                        <div class="filter-active active">
                            <div class="chooseOne yellow-bg">дата выхода</div>
                        </div>
                        <div class="filter-choose">
                            <div class="chooseOne yellow-bg">дата выхода</div>
                            <div class="chooseOne sky-bg">спец-выпуски</div>
                            <div class="chooseOne orange-bg">популярно</div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="articles">
                { postPreview() }
            </section>
        </>
    )
}