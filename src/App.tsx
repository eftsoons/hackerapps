import { useState, useEffect } from 'react'

import {Header, Bottom, Main, Icon, Menu} from "./models"
import {Times, Charging} from "./models/Header/module"

import { React, Telegram, VK} from './svg'

import './App.css'

// @ts-expect-error
const telegram = window.Telegram.WebApp;

function App() {
  //const [count, setCount] = useState(null)
  const [time, settime] = useState<Date>(new Date())
  const [activemenu, setactivemenu] = useState("main1")

  useEffect(() => {
    telegram.ready();
    telegram.expand();

    var interval = setInterval(() => {
      settime(new Date());
    }, 500);

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <Header>
        <Times>{time}</Times>
        <Charging />
      </Header>


      <Main activemenu={activemenu}>
          <Menu id="main1">
            <img style={{ width: "150px", height: "150px"}} src={Telegram} alt="Характеристика" />
          </Menu>
          <Menu id="main2">
          <img style={{ width: "150px", height: "150px"}} src={VK} alt="Методы взлома и взлом" />
          </Menu>
          <Menu id="main3">
          Топ игроков
          </Menu>
          <Menu id="main4">
          Что-то типа магазина (p2p)
          </Menu>
          <Menu id="main5">
            Статистика игры + ссылки на паблики
          </Menu>
      </Main>

      <Bottom activemenu={activemenu} setactive={setactivemenu}>
      <Icon id="main1">
        <React />
      </Icon>
      <Icon id="main2">
        <React />
      </Icon>
      <Icon id="main3">
        <React />
      </Icon>
      <Icon id="main4">
        <React />
      </Icon>
      <Icon id="main5">
        <React />
      </Icon>
      </Bottom>
    </>
  )
}

export default App
