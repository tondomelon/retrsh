import React from 'react'

import M_Header from './M_Header.jsx'
import M_Footer from './M_Footer.jsx'
import cover_1 from '../images/Covers/banner/cover_1.png'
import star_element from '../images/Star_element.png'
import fusadziro_photo from '../images/article_1_content/fusadziro_photo.png'
import past_nintendo_office from '../images/article_1_content/past_office.png'
import Japan_marioNmickey from '../images/article_1_content/Japan_marioNmickey.png'
import director_core from '../images/article_1_content/director_core.png'
import happy_nintendo_man from '../images/article_1_content/happy_nintendo_man.png'
import marios from '../images/article_1_content/marios.png'
import mario from '../images/article_1_content/mario.png'
import hollow_knight_banner from '../images/article_1_content/hollow_knight_banner.png'
import hornet_knight from '../images/article_1_content/hornet_knight.png'
import mewgenics from '../images/article_1_content/mewgenics.png'
import zenless_promo from '../images/article_1_content/zenless_promo.png'
import eastward_bg from '../images/article_1_content/eastward-bg.png'
import eastward_screenshots from '../images/article_1_content/eastward_screenshots.png'
import gardenstoru_bg from '../images/article_1_content/gardenstoru_bg.png'
import gs_1 from '../images/article_1_content/gs_1.png'
import gs_2 from '../images/article_1_content/gs_2.png'
import gs_3 from '../images/article_1_content/gs_3.png'
import gardenstory_screenshots from '../images/article_1_content/gardenstory_screenshots.png'
import deltarune from '../images/article_1_content/deltarune.png'
import tv_time from '../images/article_1_content/tv_time.png'
import deltarune_screenshots from '../images/article_1_content/deltarune_screenshots.png'

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
          <div className="margin_l_40">
            <div className="title-banner display_inline_block margin_t_50">
    <h2 className="white display_inline_block">NINTENDO:<br/>КАК КОМПАНИЯ ИЗ XIX ВЕКА<br/>СТАЛА ЛИЦОМ ГЕЙМИНГА</h2>
    </div>
</div>
<div className="nintendo-history_content">
  <div className="intro-text margin_l_100">
        <p className="hyphens">
            Сегодня Nintendo — это Switch, Mario и культовые франшизы. Но её история — это путь длиной больше века: от ручной работы и азартных игр до глобальной индустрии развлечений.
        </p>
    </div>

{/* Объединенные блоки */}
<div className='section-container1_block flex-container'> 
  {/* Левый блок */}
<div className='section1_block'>
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
  {/* Правый блок */}
<div className='section2_block'> 

 <div class="two-text-block margin_t_360 margin_r_100">
      <h2 class="yellow-bg blue display_inline_block">КОМПАНИЯ БЕЗ НАПРАВЛЕНИЯ</h2>
      <div>
<p class="hyphens">После Второй мировой войны Япония стремительно меняется, и&nbsp;вместе с&nbsp;ней меняется Nintendo. Под руководством Хироси Ямаути компания начинает искать новые пути развития.<br/><br/>Это был период, когда Nintendo буквально пробовала всё подряд: от&nbsp;массового производства пластиковых карт и&nbsp;сотрудничества с&nbsp;Disney до&nbsp;запуска такси-сервиса и&nbsp;даже гостиничного бизнеса. Некоторые идеи выглядели перспективно, но&nbsp;ни&nbsp;одна из&nbsp;них не&nbsp;давала стабильного результата.</p>

<p class="hyphens">Компания находилась в&nbsp;постоянном поиске и&nbsp;часто балансировала на&nbsp;грани провала. Но&nbsp;именно этот хаотичный этап стал важным: Nintendo научилась быстро тестировать идеи, не&nbsp;бояться ошибок и&nbsp;отказываться от&nbsp;того, что не&nbsp;работает. Этот подход позже станет одной из&nbsp;её&nbsp;сильнейших сторон.</p>
      </div>
</div>
<img src={Japan_marioNmickey}/>
</div>
</div>
</div>
        </section>

        <section className='nintendo-history2'>

<div className='flex-container'>
<div className='sticker-text-block yellow-bg margin_l_330'>
  <p className='hyphens'>Гораздо важнее было&nbsp;то, какую идею Ёкои принёс в&nbsp;компанию. Он&nbsp;считал, что не&nbsp;обязательно использовать самые новые технологии, чтобы создавать интересные продукты. Напротив, можно брать уже существующие решения и&nbsp;находить для них неожиданные применения. <br/><br/>Эта философия&nbsp;&mdash; делать простое, но&nbsp;оригинально, станет фундаментом всех будущих продуктов Nintendo.</p>
</div>
<img className='director_core' src={director_core}/>
</div>

<div className='flex-container'>
<div className="typical-text-block margin_l_100 margin_t_32 margin_l_270">
   <h2 className="orange-bg white display_inline_block">ВХОД В ВИДЕОИГРЫ</h2>
<p className="hyphens">В&nbsp;70-х Nintendo начинает двигаться в&nbsp;сторону электронных развлечений. Сначала это были аркадные автоматы, затем&nbsp;&mdash; первые домашние игровые системы.<br/>К&nbsp;началу 80-х индустрия видеоигр переживает кризис: рынок переполнен некачественными продуктами, и&nbsp;игроки теряют доверие.<br/><br/>Именно в&nbsp;этот момент Nintendo выпускает Famicom, известную за&nbsp;пределами Японии как NES. Эта консоль не&nbsp;просто возвращает интерес к&nbsp;играм&nbsp;&mdash; она задаёт новые стандарты. Nintendo начинает строго контролировать качество проектов, создаёт узнаваемые образы и&nbsp;делает акцент на&nbsp;игровом процессе, а&nbsp;не&nbsp;на&nbsp;технических характеристиках.</p>
</div>
<img src={happy_nintendo_man}/>
</div>

<div className="funfuct-sticker-text-block blue sky-bg margin_l_40 margin_t_NO115">
    <p className='hyphens'>В Японии Famicom переводится как «Семейный компьютер». Чтобы не отпугнуть западный рынок, её переименовали в NES (дословно — развлекательная система)</p>
</div>

<div class="two-text-block margin_t_20 margin_l_270">
      <h2 class="yellow-bg blue display_inline_block">МАРИО И РОЖДЕНИЕ ИКОНЫ</h2>
      <div>
<p class="hyphens">В&nbsp;1985 году выходит Super Mario Bros. &mdash;&nbsp;и&nbsp;индустрия получает не&nbsp;просто хит, а&nbsp;игру, которая буквально формирует язык платформеров.<br/><br/>Но&nbsp;сам персонаж появился чуть раньше. Изначально Марио был безымянным героем в&nbsp;аркаде Donkey Kong, где его называли просто Jumpman. Позже он&nbsp;получил имя в&nbsp;честь реального человека&nbsp;&mdash; арендодателя склада Nintendo of&nbsp;America, Марио Сегале.</p>

<p class="hyphens">Его образ тоже был не&nbsp;случайным: усы появились, чтобы не&nbsp;прорисовывать рот в&nbsp;пиксельной графике, кепка&nbsp;&mdash; чтобы не&nbsp;анимировать волосы, а&nbsp;комбинезон помогал лучше различать движения рук. Ограничения технологий буквально сформировали внешний вид одного из&nbsp;самых узнаваемых персонажей в&nbsp;мире.<br/><br/>В&nbsp;Super Mario Bros. Nintendo делает важный шаг: игра начинает &laquo;разговаривать&raquo; с&nbsp;игроком без слов. Первый уровень устроен так, что ты&nbsp;интуитивно понимаешь, как двигаться, когда прыгать и&nbsp;чего избегать. Это дизайн, который обучает через опыт, а&nbsp;не&nbsp;через инструкции.</p>

<p class="hyphens">Марио быстро выходит за&nbsp;пределы игр. Он&nbsp;становится лицом Nintendo, символом гейминга и&nbsp;поп-культурным персонажем, которого узнают даже&nbsp;те, кто никогда не&nbsp;играл.<br/><br/>И, возможно, именно в&nbsp;этом его сила&nbsp;&mdash; он&nbsp;максимально простой, но&nbsp;при этом работает для всех.<br/><br/><span className='yellow-bg'>&laquo;It&rsquo;s-a me, Mario&raquo;&nbsp;&mdash; и&nbsp;ты&nbsp;уже понимаешь, о&nbsp;ком речь.</span></p>
      </div>
</div>
<div className="mario-img flex-container">
<img className='marios' src={marios}/>
<img className='mario' src={mario}/>
</div>

<div className='flex-container margin_t_32'>
<div className="typical-text-block margin_l_100 margin_l_100">
   <div className="typical-text-block_title-container">
   <h2 className="orange-bg white display_inline_block">ПОРТАТИВНАЯ</h2>
   <h2 className="orange-bg white display_inline_block">РЕВОЛЮЦИЯ</h2>
   </div>
<p className="hyphens">В&nbsp;конце 80-х Nintendo снова делает неожиданный ход, выпуская Game Boy. На&nbsp;фоне более мощных устройств он&nbsp;выглядел скромно, но&nbsp;выигрывал в&nbsp;другом: он&nbsp;был удобным, долго работал без подзарядки и&nbsp;предлагал игры, в&nbsp;которые хотелось возвращаться.<br/><br/>Портативный формат сделал гейминг частью повседневной жизни. Играть можно было в&nbsp;дороге, на&nbsp;перемене, где угодно&nbsp;&mdash; и&nbsp;это полностью изменило привычки игроков.<br/><br/>Эта философия&nbsp;&mdash; делать простое, но&nbsp;оригинально, станет фундаментом всех будущих продуктов Nintendo.</p>
</div>
<div className="typical-text-block  margin_t_50">
   <div className="typical-text-block_title-container">
   <h2 className="sky-bg white display_inline_block">ЭКСПЕРИМЕНТЫ</h2>
   <h2 className="sky-bg white display_inline_block">И РИСК</h2>
   </div>
<p className="hyphens">В&nbsp;2000-х Nintendo снова идёт против индустрии. Пока конкуренты сосредотачиваются на&nbsp;мощности и&nbsp;реализме, компания выпускает Wii&nbsp;&mdash; консоль, в&nbsp;которой важнее движение и&nbsp;физическое взаимодействие, чем графика.<br/><br/>Это меняет аудиторию: играть начинают не&nbsp;только геймеры, но&nbsp;и&nbsp;семьи, дети, люди, которые раньше вообще не&nbsp;интересовались играми.<br/><br/>Позже выходит Switch&nbsp;&mdash; устройство, которое можно использовать и&nbsp;дома, и&nbsp;в&nbsp;дороге. Этот гибридный формат снова показывает, что Nintendo не&nbsp;догоняет тренды, а&nbsp;создаёт&nbsp;их.</p>
</div>
<div className="typical-text-block margin_t_80 margin_r_50">
   <div className="typical-text-block_title-container">
   <h2 className="yellow-bg black display_inline_block">ФИЛОСОФИЯ</h2>
   <h2 className="yellow-bg black display_inline_block">NINTENDO</h2>
   </div>
<p className="hyphens">Nintendo никогда не&nbsp;стремилась быть самой технологичной компанией. Вместо этого она сосредоточилась на&nbsp;том, что чувствует игрок.<br/><br/>Её&nbsp;игры легко понять, в&nbsp;них приятно возвращаться, и&nbsp;они работают на&nbsp;уровне эмоций. Это дизайн, который не&nbsp;требует объяснений, потому что он&nbsp;интуитивен.<br/><br/>Именно поэтому проекты Nintendo остаются актуальными вне зависимости от&nbsp;времени и&nbsp;трендов.</p>
</div>


</div>

        </section>

        <section className='games-section padding_b_250'>
          <div className='flex-container margin_t_80'>
            <img className='hollow_knight_banner' src={hollow_knight_banner}/>

            <div>
          <div className="margin_r_40">
            <div className="title-banner display_inline_block">
    <h2 className="white display_inline_block">STILL LOADING — ИГРЫ,<br/>КОТОРЫЕ МЫ ЖДЁМ</h2>
    </div>
    </div>
    <div className="intro-text margin_l_100">
        <p className="hyphens">
            Nintendo научила нас ждать&nbsp;&mdash; новые консоли, новые миры, новые ощущения. Но&nbsp;сегодня ожидание стало отдельным жанром. Игры анонсируют задолго до&nbsp;релиза, обсуждают годами и&nbsp;превращают в&nbsp;мемы.
Still loading&nbsp;&mdash; кажется, это главный статус современного гейминга.</p>
    </div>

<div className='flex-container'>
<div className="text-block_w-color margin_t_40">
      <div className="typical-text-block_title-container">
   <h2 className="sky-bg white display_inline_block">Бесконечное</h2>
   <h2 className="sky-bg white display_inline_block">ожидание silksong</h2>
   </div>
<p className="hyphens orange-bg">Hollow Knight: Silksong&nbsp;&mdash; это уже не&nbsp;просто продолжение, а&nbsp;феномен ожидания.<br/><br/>После успеха первой части фанаты сразу начали ждать сиквел, но&nbsp;годы идут, а&nbsp;релиза всё нет. За&nbsp;это время игра успела превратиться в&nbsp;мем: каждое игровое шоу сопровождается надеждой &laquo;а&nbsp;вдруг покажут&raquo;, и&nbsp;почти всегда&nbsp;&mdash; разочарованием.</p> 
    </div>
    <img className='hornet_knight margin_t_32' src={hornet_knight}/>
    </div>
<div className='sticker-text-block yellow-bg margin_l_270 margin_t_20'>
  <p className='hyphens'>Но&nbsp;интерес не&nbsp;угасает. Наоборот, Silksong держится на&nbsp;чистом доверии к&nbsp;разработчикам и&nbsp;любви к&nbsp;оригиналу. Это редкий случай, когда отсутствие новостей только усиливает внимание.<br/><br/>Ожидание стало частью опыта. И, возможно, именно поэтому релиз будет ощущаться как событие.</p>
</div>

    </div>
    </div>

    <div className='flex-container'>
    <div className="typical-text-block margin_l_100 margin_t_NO35">
  <div className="typical-text-block_title-container">
   <h2 className="sky-bg white display_inline_block">СТРАННОЕ, ХАОТИЧНый,</h2>
   <h2 className="sky-bg white display_inline_block">но ОЧЕНЬ ОЖИДАЕМый</h2>
   </div>
<p className="hyphens">Mewgenics выглядит как игра, которую сложно объяснить с&nbsp;первого раза&nbsp;&mdash; и&nbsp;в&nbsp;этом её&nbsp;сила.<br/>Проект разрабатывает Эдмунд Макмиллен, известный по&nbsp;The Binding of&nbsp;Isaac, и&nbsp;это многое объясняет. Его игры всегда балансируют между странным, мрачным и&nbsp;неожиданно затягивающим.<br/><br/>Mewgenics сочетает в&nbsp;себе элементы стратегии, симуляции и&nbsp;абсурда. Это тот случай, когда ты&nbsp;до&nbsp;конца не&nbsp;понимаешь, во&nbsp;что будешь играть, но&nbsp;уже уверен, что это будет что-то уникальное.
<br/>Игра ощущается как эксперимент&nbsp;&mdash; и&nbsp;именно такие проекты часто становятся культовыми.</p>
</div>
<img className='mewgenics margin_r_50 margin_t_40' src={mewgenics}/>
</div>

<div className='flex-container margin_l_680 margin_t_50'>
  <div className='text_n_button'>
    <div className="typical-text-block margin_l_100 margin_t_NO35">
  <div className="typical-text-block_title-container">
   <h2 className="sky-bg white display_inline_block">НОВЫЙ ХАЙП ОТ</h2>
   <h2 className="sky-bg white display_inline_block">БОЛЬШИХ ИГРОКОВ</h2>
   </div>
<p className="hyphens">Zenless Zone Zero&nbsp;&mdash; это уже другая сторона индустрии.<br/>Если инди-игры работают через атмосферу и&nbsp;авторский стиль, то&nbsp;здесь&nbsp;&mdash; масштаб, продакшн и&nbsp;расчёт на&nbsp;широкую аудиторию. Проект создаёт HoYoverse, студия, стоящая за&nbsp;Genshin Impact.<br/>Zenless выглядит как попытка сделать более динамичную, стильную и&nbsp;&laquo;городскую&raquo; версию их&nbsp;формулы. Быстрый экшен, яркие персонажи и&nbsp;визуал, который будто специально создан для клипов и&nbsp;соцсетей.<br/><br/>Это уже не&nbsp;просто игра&nbsp;&mdash; это медиа-продукт, который живёт одновременно в&nbsp;игре, TikTok и&nbsp;фан-артах.</p>
</div>
<button class="white-button" type="submit">
                <span>На страницу игры!</span>
              </button>
</div>
<img className='zenless_promo' src={zenless_promo}/>
</div>

 <div className="text-block_w-color margin_l_100 margin_t_216">
      <h2 className="yellow-bg black display_inline_block">ПОЧЕМУ МЫ ЖДЁМ?</h2>
<p className="hyphens orange-bg">Игры перестали быть просто продуктом, который выходит&nbsp;&mdash; их&nbsp;анонсируют, обсуждают, разбирают по&nbsp;кадрам и&nbsp;проживают задолго до&nbsp;релиза.<br/><br/>Ожидание стало частью культуры. Мы&nbsp;добавляем проекты в&nbsp;wishlist, следим за&nbsp;новостями, смотрим теории и&nbsp;делимся мемами. Иногда кажется, что сам процесс ожидания приносит не&nbsp;меньше эмоций, чем игра.<br/><br/>И&nbsp;в&nbsp;этом есть что-то общее с&nbsp;тем, как Nintendo когда-то строила свои миры&nbsp;&mdash; не&nbsp;только через геймплей, но&nbsp;и&nbsp;через предвкушение.</p> 
    </div>

        </section>


<section>

  <div className="margin_l_40 margin_t_NO60">
            <div className="title-banner display_inline_block">
    <h2 className="white display_inline_block">PIXEL CORE — ИГРЫ, КОТОРЫЕ<br/>ЧУВСТВУЮТСЯ КАК ВОСПОМИНАНИЕ</h2>
    </div>
</div>
<div className='flex-container'>
  <div>
<div className="intro-text margin_l_100">
        <p className="hyphens">
            Пока одни игры живут на&nbsp;хайпе и&nbsp;ожидании, другие уже здесь&nbsp;&mdash; тихие, атмосферные и&nbsp;почти медитативные. Они не&nbsp;пытаются удивить масштабом, а&nbsp;работают через ощущение. Пиксельная графика снова в&nbsp;моде, но&nbsp;теперь это не&nbsp;ограничение, а&nbsp;осознанный выбор.</p>
    </div>

    <div className="typical-text-block margin_l_100 margin_t_80">
  <div className="typical-text-block_title-container">
   <h2 className="yellow-bg blue display_inline_block">ПУТЕШЕСТВИЕ,</h2>
   <h2 className="yellow-bg blue display_inline_block">КОТОРОЕ НЕ СПЕШИТ</h2>
   </div>
<p className="hyphens">Eastward&nbsp;&mdash; это игра, которая будто собрана из&nbsp;воспоминаний о&nbsp;старых RPG, но&nbsp;при этом ощущается современной.<br/>Её&nbsp;мир тёплый, детализированный и&nbsp;немного меланхоличный. Каждый город выглядит живым, а&nbsp;каждая сцена словно нарисована вручную с&nbsp;вниманием к&nbsp;мелочам.
Eastward не&nbsp;торопит игрока. Здесь важно не&nbsp;только пройти сюжет, но&nbsp;и&nbsp;просто находиться внутри мира, слушать диалоги, смотреть на&nbsp;окружение, ловить настроение.<br/><br/>Это тот случай, когда игра становится почти путешествием.</p>
</div>


    </div>
<img className='eastward_bg' src={eastward_bg}/>
</div>
<img className='eastward_screenshots' src={eastward_screenshots}/>
</section>

<section className='garden-story_section'>
<div className='flex-container'>
<img className='gardenstoru_bg' src={gardenstoru_bg}/>

<div className="typical-text-block margin_r_280 margin_t_140">
  <div className="typical-text-block_title-container">
   <h2 className="yellow-bg blue display_inline_block">GARDEN STORY,</h2>
   <h2 className="yellow-bg blue display_inline_block">МИР 4-х сезонов</h2>
   </div>
<p className="hyphens">Garden Story выглядит максимально просто&nbsp;&mdash; маленькие персонажи, мягкие цвета, спокойный ритм.<br/>Но&nbsp;за&nbsp;этой простотой скрывается ощущение уюта и&nbsp;заботы. Игроку предлагают не&nbsp;спасать мир в&nbsp;привычном смысле, а&nbsp;поддерживать его, восстанавливать и&nbsp;постепенно приводить в&nbsp;порядок.<br/><br/>Именно это делает игру особенной. Она не&nbsp;давит, не&nbsp;спешит и&nbsp;не&nbsp;перегружает&nbsp;&mdash; она даёт пространство, в&nbsp;котором можно расслабиться.<br/>Такие проекты становятся своего рода &laquo;безопасным местом&raquo; внутри гейминга.</p>
</div>
</div>
<img className='gs_1' src={gs_1}/>
<img className='gs_2' src={gs_2}/>
<img className='gs_3' src={gs_3}/>
<img className='gardenstory_screenshots' src={gardenstory_screenshots}/>
</section>

<section>
  <div className='flex-container margin_l_100'>
    <div>
<div className="typical-text-block margin_t_80">
  <div className="typical-text-block_title-container">
   <h2 className="yellow-bg blue display_inline_block">DELTARUNE — СТИЛЬ,</h2>
   <h2 className="yellow-bg blue display_inline_block">ИРОНИЯ И ЭМОЦИИ</h2>
   </div>
<p className="hyphens">Deltarune&nbsp;&mdash; это уже другая сторона пиксельной эстетики.<br/><br/>Игра использует простую графику, но&nbsp;делает это осознанно: за&nbsp;ней скрывается сложная работа с&nbsp;текстом, юмором и&nbsp;персонажами.<br/>Тоби Фокс создаёт мир, который одновременно ироничный и&nbsp;трогательный. Диалоги ломают ожидания, музыка усиливает эмоции, а&nbsp;сюжет постепенно уходит в&nbsp;более глубокие темы.<br/><br/>Deltarune показывает, что пиксель&nbsp;&mdash; это не&nbsp;про &laquo;простоту&raquo;, а&nbsp;про выразительность.</p>
</div>
<img className='tv_time' src={tv_time}/>
</div>
<img className='deltarune' src={deltarune}/>
</div>
<img className='deltarune_screenshots' src={deltarune_screenshots}/>

</section>
      </main>
      <M_Footer menuLinksLeft={menuLinksLeft} menuLinksRight={menuLinksRight} />
    </>
  )
}
