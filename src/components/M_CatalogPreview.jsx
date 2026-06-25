import React, { useEffect, useState, useMemo } from "react";
import { getData } from "../javascripts/airtable";

import filterback from '../images/catalog_up_bg.png'
import filterchange from '../images/catalog_up_char1.png'

const imagesContext = require.context('../images/catalog_bgs', false, /\.(png|jpe?g|svg|gif)$/);
const imagePaths = imagesContext.keys().map(imagesContext);

export default function M_CatalogPreview () {

    //Исходные данные с сервера
    const [dataPosts, setDataPosts] = useState([]);

    //Состояние фильтра (выбранный порядок)
    const [sortOrder, setSortOrder] = useState('свежие'); // 'свежие' или 'старые'

    //Состояние для UI фильтра (раскрыто/свёрнуто, выбранная метка и класс)
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        label: 'свежие',
        bgClass: 'yellow-bg',
    });

    //Загрузка данных при монтировании
    useEffect(() => {
        getData().then(setDataPosts);
    }, []);

    //Вычисляемый отсортированный список (реактивно обновляется)
    const sortedArticles = useMemo(() => {
    return [...dataPosts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === 'свежие' ? dateB - dateA : dateA - dateB;
    });
    }, [dataPosts, sortOrder]);

    //Обработчики
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSelect = (label, bgClass) => {
        setSelectedOption({ label, bgClass });
        setSortOrder(label);
        setIsExpanded(false);
    };

    function postPreview () {
        let count = 0;
        if (sortedArticles.length > 0) {
            console.log(sortedArticles);
            return sortedArticles.map((post) => {
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
                                            <p className="hyphens">{post.description}</p>
                                        </div>
                                        <div className="article-button">
                                            <a href={post.link} className="to-the-article"><span>К выпуску!</span></a>
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
                    <div
                        className={`filter-active ${!isExpanded ? 'active' : ''}`}
                        onClick={handleToggle}
                    >
                        <div className={`chooseOne ${selectedOption.bgClass}`}>
                        {selectedOption.label}
                        </div>
                    </div>

                    <div className={`filter-choose ${isExpanded ? 'active' : ''}`}>
                        <div
                        className="chooseOne yellow-bg"
                        onClick={() => handleSelect('свежие', 'yellow-bg')}
                        >
                        свежие
                        </div>
                        <div
                        className="chooseOne sky-bg"
                        onClick={() => handleSelect('старые', 'sky-bg')}
                        >
                        старые
                        </div>
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