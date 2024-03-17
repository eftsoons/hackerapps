import { useState, useEffect, useRef } from 'react'

import Chart from 'chart.js/auto';

import {Header, Bottom, Main, Icon, Menu, Text, StatsGame, ButtonGroup, Button} from "./models"
import {Times, Charging} from "./models/Header/module"
import {StatsTG, StatsVK, Stats} from "./models/StatsGame/module"


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

    let interval = setInterval(() => {
      settime(new Date());
    }, 500);

   

    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <Header>
        <Times>{time}</Times>
        <Text>{activemenu}</Text>
        <Charging />
      </Header>


      <Main activemenu={activemenu}>
          <Menu id="main1">
            <img style={{ width: "150px", height: "150px", userSelect: "none"}} src={Telegram} alt="Характеристика" />
            Характеристики
          </Menu>
          <Menu id="main2">
          <img style={{ width: "150px", height: "150px"}} src={VK} alt="Методы взлома и взлом" />
          методы взлома и взлом
          </Menu>
          <Menu id="main3">
          Топ игроков
          </Menu>
          <Menu id="main4">
          Что-то типа магазина (p2p)
          </Menu>
          <Menu id="main5">
            <StatsGame>
              <StatsTG>Стата ТГ</StatsTG>
              <StatsVK>Стата ВК</StatsVK>
            </StatsGame>
            <Stats>Стата всей игры</Stats>
            <ButtonGroup>
              <Button onClick={() => console.log(123)}>asd</Button>
              <Button>asd</Button>
              <Button>asd</Button>
            </ButtonGroup>
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
