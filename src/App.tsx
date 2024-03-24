import { useState, useEffect } from 'react'

// import Chart from 'chart.js/auto';

import {Header, Bottom, Main, Icon, Menu, Text, StatsGame, ButtonGroup, Button, Window, Cell, GroupCell} from "./models"
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
  const [activemenu, setactivemenu] = useState("profile")
  
  useEffect(() => {
    telegram.ready();
    telegram.expand();

    telegram.BackButton.onClick(() => {telegram.BackButton.hide(); setactivemenu("profile")})

    let interval = setInterval(() => {
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
          <Menu id="profile">
            <img style={{ width: "150px", height: "150px", userSelect: "none"}} src={Telegram} alt="Характеристика" />
            Характеристики
            <Text>{activemenu}</Text>
            <Button onClick={() => telegram.BackButton.show()}>Текст кнопки выхода</Button>
            <Button onClick={() => telegram.openLink("https://t.me/share/url?url=asdasd&text=Ты был взломан")}>Текст механики взлома</Button>
          </Menu>
          <Menu id="hack">
          {/* <img style={{ width: "150px", height: "150px"}} src={VK} alt="Методы взлома и взлом" />
          методы взлома и взлом */}
          <Window>
            <GroupCell>
              <Cell onClick={() => console.log(123)} icon={Telegram}>Асемблер</Cell>
              <Cell onClick={() => telegram.openTelegramLink({path_full: "/hackerapps?startattach=send-assetCurrency__&choose=users"})} icon={Telegram}>Социальная инжерия</Cell>
              <Cell icon={Telegram}>Парсинг</Cell>
              <Cell disable={true} icon={Telegram}>Асемблерasd</Cell>
              <Cell disable={true} icon={Telegram}>Асемблерasd</Cell>
            </GroupCell>
            {/* <br />
            Социальная инжерия (Заставить человека написать определенное слово)
            <br />
            Парсинг 
            <br /> */}
          </Window>
          {/* <Button href="https://t.me/share/url?url=t.me/botname/app?startapp=something&text=something">asd</Button> */}
          </Menu>
          <Menu id="top">
          Топ игроков
          </Menu>
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="secret">
            {/* what?listeng? */}
            <div className="listeng" onClick={() => {
              if (click < 40) {
                setclick(click + 1); 
              } else {
                setclick(0);
                setactivemenu("secretsuper")
                telegram.BackButton.show();
              }
          }}><Money height='20vh' width='20vw' /></div>
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
              <Button href="https://t.me/HackerCoinChannel">Telegram канал</Button>
              <Button href="https://vk.com/hackercoinplay">VK группа</Button>
              <Button href="https://t.me/shishkin666">Автор</Button>
            </ButtonGroup>
          </Menu>
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="secretsuper">
            <img width={250} src={logo} />
          </Menu>
      </Main>

      <Bottom activemenu={activemenu} setactive={setactivemenu}>
      <Icon id="profile">
        <Mobile />
      </Icon>
      <Icon id="hack">
        <Computer />
      </Icon>
      <Icon id="top">
        <Cup />
      </Icon>
      <Icon id="secret">
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
