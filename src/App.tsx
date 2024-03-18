import { useState, useEffect } from 'react'

// import Chart from 'chart.js/auto';

import {Header, Bottom, Main, Icon, Menu, Text, StatsGame, ButtonGroup, Button} from "./models"
import {Times, Charging} from "./models/Header/module"
import {StatsTG, StatsVK, Stats} from "./models/StatsGame/module"

import logo from "./img/4000x4000.png"

import {Telegram, VK, Chart, Money, Cup, Computer, Mobile} from './svg'

import './App.css'

// @ts-expect-error
const telegram = window.Telegram.WebApp;

function App() {
  //const [count, setCount] = useState(null)
  const [time, settime] = useState<Date>(new Date())
  const [click, setclick] = useState(0)
  const [activemenu, setactivemenu] = useState("Профиль")
  
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
          <Menu id="Профиль">
            <img style={{ width: "150px", height: "150px", userSelect: "none"}} src={Telegram} alt="Характеристика" />
            Характеристики
          </Menu>
          <Menu id="Взлом">
          <img style={{ width: "150px", height: "150px"}} src={VK} alt="Методы взлома и взлом" />
          методы взлома и взлом
          </Menu>
          <Menu id="Топ">
          Топ игроков
          </Menu>
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="?">
            {/* what?listeng? */}
            <div className="listeng" onClick={() => {
              if (click < 40) {
                setclick(click + 1); 
              } else {
                setclick(0);
                setactivemenu("???")
              }
          }}><Money height='20vh' width='20vw' /></div>
          </Menu>
          <Menu id="Статистика">
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
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="???">
            <img width={250} src={logo} />
          </Menu>
      </Main>

      <Bottom activemenu={activemenu} setactive={setactivemenu}>
      <Icon id="Профиль">
        <Mobile />
      </Icon>
      <Icon id="Взлом">
        <Computer />
      </Icon>
      <Icon id="Топ">
        <Cup />
      </Icon>
      <Icon id="?">
        <Money />
      </Icon>
      <Icon id="Статистика">
        <Chart />
      </Icon>
      </Bottom>
    </>
  )
}

export default App
