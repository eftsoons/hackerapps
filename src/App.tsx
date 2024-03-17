import { useState, useEffect } from 'react'

// import Chart from 'chart.js/auto';

import {Header, Bottom, Main, Icon, Menu, Text, StatsGame, ButtonGroup, Button} from "./models"
import {Times, Charging} from "./models/Header/module"
import {StatsTG, StatsVK, Stats} from "./models/StatsGame/module"


import {Telegram, VK, Chart, Money, Cup, Computer, Mobile} from './svg'

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
          <Menu id="stats">
            <StatsGame>
              <StatsTG>
              {/* <img style={{position: "absolute", top: "7%", left: "0" , width: "50px", height: "50px", userSelect: "none"}} src={Telegram} alt="" /> */}
                TG
                <br />
                Всего игроков: 2M
                <br />
                Всего монет: 2M
                <br />
                Игроков за день: 2M
                <br />
                Всего взломанных: 2M
              </StatsTG>
              <StatsVK>
                {/* <img style={{position: "absolute", top: "7%", right: "38%" , width: "50px", height: "50px", userSelect: "none"}} src={VK} alt="" /> */}
                VK
                <br />
                Всего игроков: 2M
                <br />
                Всего монет: 2M
                <br />
                Игроков за день: 2M
                <br />
                Всего взломанных: 2M
              </StatsVK>
            </StatsGame>
            <Stats>
                <img style={{ width: "100px", height: "100px", userSelect: "none"}} src={Telegram} alt="Характеристика" />
                Всего игроков: 4M
                <br />
                Всего монет: 4M
                <br />
                Игроков за день: 4M
                <br />
                Всего взломанных: 4M
                <img style={{ width: "100px", height: "100px"}} src={VK} alt="" />
            </Stats>
            <ButtonGroup>
              <Button href="https://t.me/HackerCoinChannel" onClick={() => console.log(123)}>Telegram канал</Button>
              <Button href="https://vk.com/hackercoinplay">VK группа</Button>
              <Button href="https://t.me/shishkin666">Автор</Button>
            </ButtonGroup>
          </Menu>
      </Main>

      <Bottom activemenu={activemenu} setactive={setactivemenu}>
      <Icon id="main1">
        <Mobile />
      </Icon>
      <Icon id="main2">
        <Computer />
      </Icon>
      <Icon id="main3">
        <Cup />
      </Icon>
      <Icon id="main4">
        <Money />
      </Icon>
      <Icon id="stats">
        <Chart />
      </Icon>
      </Bottom>
    </>
  )
}

export default App
