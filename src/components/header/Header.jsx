import React from 'react'
import classes from './header.module.css'


export function Header(props){
  return (
    <header className={classes.Header}>
      <h2>Яндекс Директ</h2>
      <ul>
        <li>Агенства</li>
        <li>Специалисты</li>
        <li>Мне нужна помощь</li>
      </ul>
      <button className={classes.knopka}>
        Зарегистрироваться
      </button>
      <button className={classes.knopka2}>
          Войти 
      </button>
    </header>
  )
}

