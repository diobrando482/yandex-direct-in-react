import React from 'react'
import classes from './section4.module.css'
import Img from './section4.png'
import yandexVideo from './yandex_main_video.webm'
export const Section4 = () => {
  return (
    <div className={classes.Section4}>
        <h2 className={classes.name}>
            Рекламу может создать каждый
        </h2>
        <p>
        Для простого старта достаточно ссылки — Директ сам предложит картинку, текст и настройки.
        </p>
        <div className="video-container">
            <iframe src={yandexVideo} title="Yandex Video"  allowFullScreen></iframe>
        </div>
        <div className={classes.Section4Photo}>
        </div>
        <img src={Img} alt="" />
    </div>
  )
}