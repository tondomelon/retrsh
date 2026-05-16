import React from "react"

import M_Header from '../components/M_Header.jsx'
import M_Footer from '../components/M_Footer.jsx'

export default function S_Main (
   {menuLinksLeft, menuLinksRight}
) {
    return (
        <>
       <M_Header menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />

    <main className="main-main">
      <section className="section-preview">
        <div className="section1_container container">
          <div className="section1_bgimg">
            <img src="./images/Retrash_bgSlogan-main.svg"/>
          </div>
          <div className="section1_man-headphones">
            <img src="./images/Dude-with-headphones.png"/>
          </div>
          <h2 className="section1-title">читай интересующие <span>новинки</span> в&nbsp;новом старом <span>формате!</span></h2>
          <p className="section1-text">Выбирай близкую тебе рубрику и&nbsp;айда погружаться:</p>

          <div className="theme-selector">
            <div><img className='theme-hover' src="./images/stuff_theme.svg"/></div>
            <div><img className='theme-hover' src="./images/alley_theme.svg"/></div>
            <div><img className='theme-hover' src="./images/geeked_theme.svg"/></div>
            <div><img className='theme-hover' src="./images/daily_theme.svg"/></div>
            <div><img className='theme-hover' src="./images/oldschool_theme.svg"/></div>
          </div>
        </div>
      </section>

       <div className="info-square">
            <div className="container">
              <div className="info-square_left"><h3>читай интересующие новинки в новом старом формате!</h3></div>
            </div>
          </div>

          <section className="section-aboutus">
            <div className="section2-container container">
              <div className="aboutus-left_block">
                <img src="./images/girl-with-themes.svg"/>
                <div><img className='section2-theme sizeBig' src="./images/oldschool_theme.svg"/></div>
                <div><img className='section2-theme sizeMedium' src="./images/alley_theme.svg"/></div>
                <div><img className='section2-theme sizeSmall' src="./images/geeked_theme.svg"/></div>
              </div>
              <div className="aboutus-right_block">
                <h2 className="right_block-h2">что и кто мы?</h2>
                <div className="aboutus-text_block">
                  <h3>Журналы</h3>
                  <p>У нашего медиа есть 5 жанров или же&nbsp;«мини-брендов» под&nbsp;которыми мы&nbsp;издаем выпуски на&nbsp;заданные тематики. Выбирай что&nbsp;тебе интересно&nbsp;и&nbsp;наслаждайся!</p>
                </div>
                <div className="aboutus-text_blockNo-title">
                  <p>Гики, творческие люди или&nbsp;просто подростки, которые хотят знать общие медиа новости, найдут чем&nbsp;занять себя здесь. Не&nbsp;знаешь&nbsp;что почитать? Тыкай нашу кнопку рандома и&nbsp;погружайся!</p>
                </div>
                <div className="aboutus_block-with-button">
                <div className="aboutus-text_block marginTextBlock">
                  <h3>Давай<br/>знакомиться!</h3>
                  <p>Узнай нас и&nbsp;наш проект поближе, с&nbsp;радостью расскажем подробнее :- )</p>
                </div>
                <img className="aboutus-arrow_button" src="./images/arrow-button.svg"/>
                </div>
              </div>
              <img className="star-bg" src="./images/Star_element.png"/>
              <div className="aboutus-sticker_button">
              <img className="aboutus-sticker_bg" src="./images/Sticker-button.png"/>
              <p>Рандомный выпуск!</p>
              <img className="blue-arrow" src="./images/arrow_1.svg"/>
              </div>
              
            </div>
            <div className="aboutus_slider">
                <img src="./images/slider-img-1.jpg"/>
                <img src="./images/slider-img-2.jpg"/>
                <img src="./images/slider-img-3.jpg"/>
                <img src="./images/slider-img-4.jpg"/>
                <img src="./images/slider-img-5.jpg"/>
                <img src="./images/slider-img-6.jpg"/>
                <img src="./images/slider-img-1.jpg"/>
                <img src="./images/slider-img-2.jpg"/>
              </div>
              <div className="info-square_blue">
            <div className="container">
              <div className="info-square_center"><h3>свежие выпуски!</h3></div>
            </div>
          </div>
          </section>

          <section className="fresh-releases container">
            <h3 className="title_fresh-realises">выпуски в тренде:</h3>

            <div className="wrapper_fresh-releases">
              <div className="grid_fresh-releases">
                <div className="release_fresh-releases">
                  <div className="opacity_block">
                    <img src="./images/slider-img-3.jpg"/>
                    <div className="fresh-releases_opacity">
                    <ul>
                      <li>Как тату покорли мир?</li>
                      <li>подборка телевизионных интервью тату</li>
                      <li>Цензура: тогда и&nbsp;сейчас</li>
                      <li>Смелый шаг: удачные эксперименты в&nbsp;музыке и&nbsp;дебюты</li>
                      <li>Вульгарные образы артистов&nbsp;девяностых</li>
                      <li>Отголоски прошлого в&nbsp;нынешних песнях</li>
                    </ul>
                    <p>Это и&nbsp;многое другое в&nbsp;выпуске, кликай!</p>
                  </div>
                  </div>
                  <p>Гикануться 25.12.25</p>
                </div>
                <div className="release_fresh-releases">
                  <img src="./images/slider-img-1.jpg"/>
                  <p>Аллея 24.12.25</p>
                </div>
                <div className="release_fresh-releases">
                  <img src="./images/slider-img-5.jpg"/>
                  <p>Аллея 16.03.26</p>
                </div>
                <div className="release_fresh-releases">
                  <img src="./images/slider-img-6.jpg"/>
                  <p>Дейлик 13.09.25</p>
                </div>
              </div>
            </div>
           
          </section>
          <div className="after_fresh-releases">
          <div className="man-finalsection">
            <img className="man-on-skate" src="./images/man-on-skate.png"/>
            </div>
             <div className="check-out_button">
              <p>зацени полный каталог!
              </p>
              <a href="#" ><span>погнали!</span></a>
            </div>
            </div>

          
            <section className="whats-new">

              <div className="whats-new_container">
                <div className="new_article_1">
                  <h2>что новенького?</h2>
                  <div className="article_base new_article-edit">
                    <h3 className="orange-bg num-ven">1</h3>
                    <div className="article_text-with-header">
                      <h4 className="orange">Киберпанк снова&nbsp;в&nbsp;моде</h4>
                      <p className="hyphens width280">В&nbsp;мире гик-культуры снова вспыхнул интерес к&nbsp;киберпанку. Новые игры, аниме и&nbsp;комиксы возвращают нас в&nbsp;неоновые мегаполисы будущего с&nbsp;летающими машинами, хакерскими сражениями и&nbsp;корпорациями, контролирующими всё. Фанаты обсуждают детали вселенных и&nbsp;создают свои фан-арты и&nbsp;истории. Этот тренд не&nbsp;просто модный: он&nbsp;объединяет коммьюнити вокруг эстетики технологического будущего, социальной дистопии и&nbsp;крутых персонажей, которые балансируют на&nbsp;грани закона и&nbsp;хаоса. </p>
                    </div>
                  </div>
                  <div className="text-block-wButton wButton-marginleft-1">
                  <p className="hyphens side-text">Даже модные бренды используют киберпанк-элементы в&nbsp;одежде, аксессуарах и&nbsp;мерче. Хотите узнать, что нового выходит в&nbsp;жанре и&nbsp;какие старые шедевры стоит пересмотреть&nbsp;&mdash; следите за&nbsp;обновлениями!</p>
                  <div> <button>к статье!</button> </div>
                  </div>
                  <img className='new_article_1-img' src="./images/new-article_content1-left.png"/>
                </div>
                <img className='new_article_1-content' src="./images/new-article_content1.png"/>
              </div>


              <div className="table-games_container">
                <div className="new_article_1">
                  
                  <div className="table-games-img">
                    <img src="./images/new-article_content2-left.png"/>
                  </div>
                </div>
                  <div className="table-games_text">
                    <div className="article_base new_article-edit-2">
                      <h3 className="sky-bg num-pix">2</h3>
                      <div className="article_text-with-header">
                        <h4 className="sky">возвращение культовых настольных игр</h4>
                        <p className="hyphens width280">Настольные игры снова в&nbsp;тренде! Новые издания культовых игр и&nbsp;локализации давно забытых шедевров захватывают внимание геймеров и&nbsp;коллекционеров.
  Не&nbsp;просто карточки и&nbsp;кубики&nbsp;&mdash; это целые миры с&nbsp;увлекательными механиками, стратегиями и&nbsp;кооперативными сюжетами.</p>
                      </div>
                    </div>
                    <div className="text-block-wButton wButton-marginleft-2">
                    <p className="hyphens side-text">Коворкинги и&nbsp;кафе устраивают турниры, где собираются фанатыmсо всех уголков города. Многие создают свои кастомные версии, используя 3D-печать фигурок и&nbsp;цифровые приложения. Интерес к&nbsp;настольным играм растёт не&nbsp;только как к&nbsp;развлечению, но&nbsp;и&nbsp;как способу социализации, общения и&nbsp;даже развития логики и&nbsp;креативности.</p>
                    <div> <button>к статье!</button> </div>
                    </div>
                  </div>
                  <div className="yellow-note st-edit element-decorate-yn"><p>Как «Очень странные дела» возродили настолки и днд
              </p> <a href="#" ><span>читать!</span></a></div>
              </div>

              <div className="anime-boom_container">
                <div className="new_article_1 displayflex">
                  <div className="anime-boom-img">
                    <img src="./images/new-article_content3-left.png"/>
                  </div>
                  <div className="article_base new_article-edit-3">
                      <h3 className="orange-bg num-pix">3</h3>
                      <div className="article_text-with-header">
                        <h4 className="orange">Аниме-бум нового поколения</h4>
                        <p className="hyphens width410">Новое поколение аниме-проектов ломает привычные каноны: персонажи сложнее, сюжеты глубже, а&nbsp;визуальный стиль поражает воображение. Даже старые франшизы получают свежие переосмысления, которые становятся вирусными в&nbsp;соцсетях.<br/><br/>Фанаты обсуждают эпизоды, создают мемы и&nbsp;косплей, делятся теориями и&nbsp;фанфиками. Кроссоверы с&nbsp;видеоиграми, музыкальные коллаборации и&nbsp;VR-проекты делают аниме не&nbsp;просто медиапродуктом, а&nbsp;частью целой культуры. А&nbsp;если вы&nbsp;новичок, всегда найдётся <span> список &laquo;must-watch&raquo; сезонов</span> и&nbsp;мини-сериалов, чтобы погрузиться в&nbsp;этот мир.</p>
                        <div> <a className="to-the-article" href="#">к статье!</a> </div>
                      </div>
                    </div>
                    <div className="anime-boom-img2">
                      <img src="./images/new-article_content3-right.png"/>
                    </div>
                </div>
              </div>
              <div className="vr_world">
                 <div className="article_base new_article-edit-4">
                    <h3 className="orange-bg num-ven">4</h3>
                    <div className="article_text-with-header">
                      <h4 className="orange">мир VR расширяется</h4>
                      <p className="hyphens width280"> Виртуальная реальность и&nbsp;метавселенные больше не&nbsp;фантастика&nbsp;&mdash; это место, где создаются собственные вселенные, общаются друзья и&nbsp;проходят события. Новые VR-игры и&nbsp;социальные платформы позволяют примерить на&nbsp;себя роли супергероев, космических исследователей и&nbsp;даже участников эпических квестов. <br/><br/> Появляются фанатские события, виртуальные концерты и&nbsp;выставки, где технологии смешиваются с&nbsp;креативом. Для гиков это шанс стать частью уникальной истории, экспериментировать с&nbsp;образами и&nbsp;даже создавать контент, который увидят тысячи людей. </p> 
                      <div> <a className="to-the-article" href="#">к статье!</a> </div>
                     
                    </div>
                    
                  </div>
                   <img className='new_article_4-content' src="./images/new-article_content4.png"/>
                
                
                </div>


              <div className="collection_merch">
                 <div className="new_article_1">
                  
                  <div className="table-games-img">
                    <img src="./images/new-article_content5-left.png"/>
                  </div>
                </div>
                  <div className="table-games_text">
                    <div className="article_base new_article-edit-5">
                      <h3 className="sky-bg num-pix">5</h3>
                      <div className="article_text-with-header">
                        <h4 className="sky">коллекционные вселенные и мерч</h4>
                        <p className="hyphens width280">Фанаты снова охотятся за&nbsp;редкими фигурками, комиксами и&nbsp;лимитированными коллекционными наборами. Рынок мерча растёт: брендированные товары, коллаборации с&nbsp;известными авторами и&nbsp;эксклюзивные релизы вызывают настоящий ажиотаж. <br/> <br/> Каждая новая коллекция становится событием: фанаты обсуждают качество, дизайн и&nbsp;редкость, создавая целые сообщества по&nbsp;интересам. Коллекционирование перестало быть просто хобби&nbsp;&mdash; это стиль жизни, способ выражения и&nbsp;даже инвестиция. Не&nbsp;пропустите главные релизы и&nbsp;тренды, чтобы оставаться в&nbsp;центре гик-культуры!</p>
                        <div> <a className="to-the-article" href="#">к статье!</a> </div>
                      </div>
                    </div>
                    
                    
                  </div>
                  <div className="yellow-note htom-edit element-decorate-yn"><p>где заказывать мерч?
              </p> <a href="#" ><span>читать!</span></a></div>
              </div>
              
            </section>
    </main>
    <M_Footer menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
        </>
    )
}