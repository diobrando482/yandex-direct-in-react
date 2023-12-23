import React from 'react'
import classes from './section3.module.css'
export const Section3 = () => {
  return (
    <div className={classes.Section3}>
        <div className={classes.container}></div>
        <h2>
            Поможем тратить со смыслом
        </h2>
        <span>
            В Директе можно платить за действия пользователей: покупки,<br /> заявки и другие. А бонусная программа Яндекс.Директа <br /> поможет вернуть до 12% трат на рекламу.
        </span>
        <div className={classes.mini}>
        {/* Установите комфортный для вас бюджет — <br /> и Директ сделает все, чтобы каждый рубль <br/> тратился эффективно. Детальная аналитика <br /> покажет, сколько клиентов привела реклама. */}
        </div>
    </div>
  )
}