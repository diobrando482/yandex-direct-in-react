import React from 'react'
import classes from './content1.module.css'

export const Content1 = (props) => {
  return (
    <>
    <div className={classes.Content1}>
        <h1>  
            Технологии<br /> 
            Яндекс Директа<br /> 
            найдут ваших клиентов<br /> 
        </h1>
        <div className={classes.Otstup}>
        <p>
          Среди 100 миллионов пользователей интернета в России*
        </p>
        <div className={classes.buttons}>
        <button className={classes.knopka}>
          Зарегистрироваться
        </button>
        <button className={classes.knopka2}>
          Войти 
        </button>
      </div>
      </div>
      <div>
        <div className={classes.h2}>
          <p>
            Умная реклама работает на вас
          </p>
          <ul>
            <li>приводит клиентов</li>
            <li>продает товары</li>
            <li>Возвращает клиентов за новыми покупками</li>
          </ul>
        </div>

      </div>
    </div>
    </>
    )
}
