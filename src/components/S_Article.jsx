import React from 'react'

import M_Header from './M_Header.jsx'
import M_Footer from './M_Footer.jsx'
import cover_1 from '../images/Covers/banner/cover_1.png'
import star_element from '../images/Star_element.png'
import fusadziro_photo from '../images/article_1_content/fusadziro_photo.png'
import past_nintendo_office from '../images/article_1_content/past_office.png'

export default function S_Article({ menuLinksLeft, menuLinksRight }) {
  return (
    <>
      <M_Header menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
      <main>
        <div className="search_random">
          <div className="search_random-container">
            <a className="random_article white-button" href="#">
              <span>Рандомный выпуск</span>
            </a>
            <div className="search_stroke">
              <input
                className="search_stroke_input"
                type="search"
                name="q"
                placeholder="Поиск"
              />
              <button className="white-button" type="submit">
                <span>Найти</span>
              </button>
            </div>
          </div>
        </div>
        <div className="cover">
          <img className="cover-img" src={cover_1} />
        </div>

        <section className="article_preview-slots">
          <div className="article_preview">
            <h2>Сегодня в выпуске:</h2>
            <div className="preview-grid">
              <article className="card item1 cursor-pointer">
                <div className="card__title">
                  <span className="orange-bg white display_inline_block">1. ИСТОРИЯ NINTENDO</span>
                </div>
                <div className="card__subtitle">
                  <span className="orange-bg white display_inline_block">К господству по ступенькам</span>
                </div>
              </article>
              <article className="card item2 cursor-pointer">
                <div className="card__title">
                  <span className="yellow-bg blue display_inline_block">2. STILL LOADING</span>
                </div>
                <div className="card__subtitle">
                  <span className="yellow-bg blue display_inline_block">ОЖИДАЕМЫЕ ИГРЫ ЭТОГО ГОДА</span>
                </div>
              </article>
              <article className="card item3 cursor-pointer">
                <div className="card__title ">
                  <span className="white-bg orange display_inline_block">3. PIXEL CORE</span>
                </div>
                <div className="card__subtitle">
                  <span className="white-bg orange display_inline_block">ПОДБОРКА ПИКСЕЛЬНЫХ ИГР</span>
                </div>
              </article>
              <article className="card item4 cursor-pointer">
                <div className="card__title">
                  <span className="yellow-bg blue display_inline_block">4. RAVE IS BACK</span>
                </div>
                <div className="card__subtitle">
                  <span className="yellow-bg blue display_inline_block">ВЕЧЕРИНКИ МОСКВЫ</span>
                </div>
              </article>
              <article className="card item5 cursor-pointer">
                <div className="card__title">
                  <span className="orange-bg white display_inline_block">5. ТРЕНДАНУЛСЯ</span>
                </div>
                <div className="card__subtitle">
                  <span className="orange-bg white display_inline_block">КАК ВАЙПЕРЫ ПОКОРИЛИ ТИКТОК</span>
                </div>
              </article>
              </div>
            <img className="star position_up-right" src={star_element}/>
          </div>
        </section>
        <section className="nintendo-history">
          <div className="marginT_title-banner">
            <div className="title-banner display_inline_block">
    <h2 className="white display_inline_block">NINTENDO:<br/>КАК КОМПАНИЯ ИЗ XIX ВЕКА<br/>СТАЛА ЛИЦОМ ГЕЙМИНГА</h2>
    </div>
</div>
<div className="nintendo-history_content">
  <div className="intro-text margin_l_100">
        <p className="hyphens">
            Сегодня Nintendo — это Switch, Mario и культовые франшизы. Но её история — это путь длиной больше века: от ручной работы и азартных игр до глобальной индустрии развлечений.
        </p>
    </div>

<div className="padding_t_80">
    <div className="text-block_w-color margin_l_210">
      <h2 className="orange-bg white display_inline_block">С чего все началось?</h2>
<p className="hyphens yellow-bg">В&nbsp;1889 году предприниматель Фусадзиро Ямаути открыл в&nbsp;Киото небольшую мастерскую по&nbsp;производству игральных карт hanafuda.<br/>Это были не&nbsp;просто карты&nbsp;&mdash; они использовались в&nbsp;азартных играх, которые тогда находились в&nbsp;серой зоне закона.<br/><br/>Компания быстро заняла свою нишу: карты были качественными, красивыми и&nbsp;пользовались спросом.
Уже тогда Nintendo делала ставку на&nbsp;дизайн и&nbsp;эмоции, а&nbsp;не&nbsp;просто продукт.</p> 
    </div>

<img className="past_office-img margin_l_40 margin_t_80" src={past_nintendo_office}/>


      </div>
<div className="typical-text-block margin_l_100 margin_t_32">
  <div className="typical-text-block_title-container">
   <h2 className="orange-bg white display_inline_block">ИГРУШКИ</h2>
   <h2 className="orange-bg white display_inline_block">КАК ПЕРЕЛОМ</h2>
   </div>
<p className="hyphens">В&nbsp;60-х годах Nintendo делает поворот в&nbsp;сторону игрушек, и&nbsp;здесь появляется ключевая фигура&nbsp;&mdash; Гумпэй Ёкои.<br/><br/>Он&nbsp;начинал как инженер, но&nbsp;его заметили благодаря простой механической разработке&nbsp;&mdash; Ultra Hand. Это была раздвижная &laquo;рука&raquo;, которая могла захватывать предметы, и, несмотря на&nbsp;свою простоту, она стала настоящим хитом.</p>
</div>

</div>
        </section>
      </main>
      <M_Footer menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
    </>
  )
}
