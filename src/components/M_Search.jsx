import React from "react";


export default function M_Search (
) {
     
    return (
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
    )
}