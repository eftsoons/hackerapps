import { useState, useEffect } from 'react'

import bridge from "@vkontakte/vk-bridge"

// import Chart from 'chart.js/auto';

import {Header, Bottom, Main, Icon, Menu, StatsGame, ButtonGroup, Button, Window, Cell, GroupCell} from "./models"
import {Times, Charging} from "./models/Header/module"
import {StatsTG, StatsVK, Stats} from "./models/StatsGame/module"

import logo from "./img/500x500.png"
import assembler from "./img/20181030112233_logoASM_new_kolko.png"

import {Telegram, VK, Chart, Money, Cup, Computer, Mobile} from './svg'

import './App.css'

// @ts-expect-error
const telegram = window.Telegram.WebApp;

function App() {
  //const [count, setCount] = useState(null)
  const [time, settime] = useState<Date>(new Date())
  const [click, setclick] = useState(0)
  const [activemenu, setactivemenu] = useState("profile")
  const [user, setuser] = useState({first_name: "Александр", last_name: "Федорович", photo: "asd"})
  
  useEffect(() => {
    telegram.ready();
    telegram.expand();

    console.log(telegram.initDataUnsafe)

    telegram.BackButton.onClick(() => {telegram.BackButton.hide(); setactivemenu("profile")})
    telegram.setHeaderColor("#181818")
    telegram.setBackgroundColor("#181818")

    let interval = setInterval(() => {
      settime(new Date());
    }, 500);

    async function fetchData() {
      if (telegram.initDataUnsafe.user) {
        setuser({
          first_name: telegram.initDataUnsafe.user.first_name, 
          last_name: telegram.initDataUnsafe.user.last_name,
          photo: "https://sun75-2.userapi.com/s/v1/if2/tITQ5bySaMd5DxzDvj_FK23vWG_rajznbafawMPVvo6AELi0oQY3j29GzheFfe7wcE9hoDeS6oA9da24OH1FPODB.jpg?quality=95&crop=63,0,1141,1141&as=50x50,100x100,200x200,400x400&ava=1&u=svMfBa0kU-GORlIDTaRG9V0N17oSXj-1PpUXnTjKLnQ&cs=200x200"
        })
      } else {
        const user = await bridge.send("VKWebAppGetUserInfo");
        setuser({
          first_name: user.first_name, 
          last_name: user.last_name,
          photo: "asd"
        })
      }
    }

    fetchData()

    document.addEventListener("mousemove", e => {
      Object.assign(document.documentElement, {
          style: `${document.documentElement.style.cssText}; --move-x: ${(e.clientY - window.innerHeight / 2)}deg; --move-y: ${(e.clientX - window.innerWidth / 2)}deg`
      })
  })

    return () => clearInterval(interval);
  }, [])

  function nextmenu(namemenu: string, backnamenu?: string) {
    setactivemenu(namemenu); 
    if (backnamenu) {
      telegram.BackButton.onClick(() => {telegram.BackButton.hide(); setactivemenu(backnamenu)});
      telegram.BackButton.show();
    }
  }

  return (
    <>
      <Header>
        <Times>{time}</Times>
        <Charging />
      </Header>

      {/* <img style={{ width: "150px", height: "150px", userSelect: "none"}} src={Telegram} alt="Характеристика" />
            Характеристики
            <Text>{activemenu}</Text>
            <Button onClick={() => telegram.BackButton.show()}>Текст кнопки выхода</Button>
            <Button onClick={() => 
            {
              // telegram.openTelegramLink("https://t.me/wallet/url?url=sedf");
              telegram.showPopup({title: "Окно потверждения взлома", message: "На этом этапе взлома вам необходимо будет отправить вредоносную ссылку пользователю"})
            }
              }>
              Текст механики взлома
            </Button> */}


      <Main activemenu={activemenu}>
          <Menu id="profile">
            <Window>
              {/* <img style={{width: "50px"}} src={telegram.initDataUnsafe.user.photo_url} alt="" /> */}
              {/* Тут история вашего взлома, ваши взломанные пользователи, количество монет, ваш ранг, ваше фото + ФИО + доступные ссылки взлома */}
              <div className='stats'>
                <img src="https://sun75-2.userapi.com/s/v1/if2/tITQ5bySaMd5DxzDvj_FK23vWG_rajznbafawMPVvo6AELi0oQY3j29GzheFfe7wcE9hoDeS6oA9da24OH1FPODB.jpg?quality=95&crop=63,0,1141,1141&as=50x50,100x100,200x200,400x400&ava=1&u=svMfBa0kU-GORlIDTaRG9V0N17oSXj-1PpUXnTjKLnQ&cs=200x200" alt="" />
                <div>
                  <div className='statsusername'>
                    {`${user.first_name} ${user.last_name}`}
                  </div>
                  <div className='statsusername2'>
                    Взлома: 0 акков
                  </div>
                </div>
              </div>
              <GroupCell>
                Взломанные:
                <Cell 
                icon="https://sun75-2.userapi.com/s/v1/if2/tITQ5bySaMd5DxzDvj_FK23vWG_rajznbafawMPVvo6AELi0oQY3j29GzheFfe7wcE9hoDeS6oA9da24OH1FPODB.jpg?quality=95&crop=63,0,1141,1141&as=50x50,100x100,200x200,400x400&ava=1&u=svMfBa0kU-GORlIDTaRG9V0N17oSXj-1PpUXnTjKLnQ&cs=200x200" 
                righttext="+100$">
                {`${user.first_name} ${user.last_name}`}
                </Cell>
                <Cell disable onClick={() => console.log(123)} righttext="+100$">asd</Cell>
                <Cell righttext="+100$" bottomtext="test">asd</Cell>
                <Cell righttext="+100$" bottomtext="test">asd</Cell>
                <Cell righttext="+100$" bottomtext="test">asd</Cell>
              </GroupCell>
            </Window>
          </Menu>
          <Menu id="hack">
          {/* <img style={{ width: "150px", height: "150px"}} src={VK} alt="Методы взлома и взлом" />
          методы взлома и взлом */}
          <Window>
            <GroupCell>
              <Cell 
                onClick={() => nextmenu("playassembler", "hack")} 
                icon={assembler}
                righttext="1 ссылка взлом"
                >
                Асемблер
              </Cell>
              <Cell 
              onClick={() => nextmenu("playnaeb", "hack")}
              righttext="5 ссылок взлом"
              >Социальная инженерия</Cell>
              <Cell onClick={() => nextmenu("playparsing", "hack")} icon={Telegram}
              righttext="10 ссылок взлом"
              >Парсинг</Cell>
              <Cell disable icon={Telegram}>Асемблерasd</Cell>
              <Cell disable icon={Telegram}>Асемблерasd</Cell>
              <Cell righttext='1000$'>Группа 123</Cell>
              <Cell righttext='1000$'>Группа 123</Cell>
              <Cell righttext='1000$'>Группа 123</Cell>
              <Cell righttext='1000$'>Группа 123</Cell>
              <Cell righttext='1000$'>Группа 123</Cell>
              <Cell righttext='1000$'>Группа 123</Cell>
              {/* onClick={() => telegram.openTelegramLink({path_full: "/hackerapps?startattach=send-assetCurrency__&choose=users"})} icon={Telegram} */}
            </GroupCell>
            {/* <br />
            Социальная инженерия (Заставить человека написать определенное слово)
            <br />
            Парсинг 
            <br /> */}
          </Window>
          {/* <Button href="https://t.me/share/url?url=t.me/botname/app?startapp=something&text=something">asd</Button> */}
          </Menu>
          <Menu id="top">
            <Window>
          <div className='top'>
            <div className='topplayer'><img src={Telegram} alt=""/></div>
            <div className='topseperator' />
            <div className='topgroup'><img src={VK} alt=""/></div>
          </div>
          <GroupCell>
            <Cell righttext='1000$'>Группа 123</Cell>
            <Cell righttext='500$'>Игрок 123</Cell>
            <Cell righttext='150$'>Группа 321</Cell>
            <Cell righttext='50$'>Игрок 321</Cell>
            <Cell righttext='50$'>Игрок 321</Cell>
            <Cell righttext='50$'>Игрок 321</Cell>
            <Cell righttext='50$'>Игрок 321</Cell>
            <Cell righttext='50$'>Игрок 321</Cell>
            <Cell righttext='50$'>Игрок 321</Cell>
          </GroupCell>
          </Window>
          </Menu>
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="secret">
            {/* what?listeng? */}
            <div className="listeng" onClick={() => {
              if (click < 40) {
                setclick(click + 1); 
                telegram.HapticFeedback.notificationOccurred("warning")
              } else {
                setclick(0);
                nextmenu("secretsuper", "secret")
                telegram.HapticFeedback.notificationOccurred("error")
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
            <img style={{borderRadius: "15px"}} width={250} src={logo} />
          </Menu>
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="playassembler">
            Миниигра Асемблер
          </Menu>
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="playnaeb">
            Миниигра Соц. инжерия
          </Menu>
          <Menu style={{display: "flex", alignItems: "center", justifyContent: "center"}} id="playparsing">
            Миниигра Парсинг
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
