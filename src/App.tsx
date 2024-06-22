import { useState, useEffect } from 'react'

import axios from "axios"

import bridge from "@vkontakte/vk-bridge"

// import Chart from 'chart.js/auto';

import {Header, Bottom, Main, Icon, Menu, StatsGame, ButtonGroup, Button, Window, Cell, GroupCell} from "./models"
import {Times, Charging} from "./models/Header/module"
import {StatsTG, StatsVK, Stats} from "./models/StatsGame/module"

import logo from "./img/500x500.png"
import {DuckDoctorA, DuckSpy, DuckVar, DuckWhat} from './img'
import {Telegram, VK, Chart, Money, Cup, Computer, Mobile, Group, User} from './svg'

import './App.css'

// @ts-expect-error
const telegram = window.Telegram.WebApp;

const site = "http://localhost:600"

interface topplayer {
  user: {name: string, money: string}[]
  group: {name: string, money: string}[]
  [key: string]: any; // Сигнатура индекса для доступа по строковому ключу
}

function App() {
  //const [count, setCount] = useState(null)
  const [time, settime] = useState<Date>(new Date())
  const [click, setclick] = useState(0)
  const [activemenu, setactivemenu] = useState("profile")
  const [user, setuser] = useState({first_name: "Александр", last_name: "Федорович", photo: "asd"})
  const [activetopmenu, setactivetopmenu] = useState<string>("user")
  const [topuser, settopuser] = useState<topplayer>({user: [{name: "user 1", money: "100"}, {name: "user 2", money: "100"}, {name: "user 3", money: "100"}], group: [{name: "group 1", money: "100"}, {name: "group 2", money: "100"}, {name: "group 3", money: "100"}]})
  
  useEffect(() => {
    telegram.ready();
    window.addEventListener('touchmove', e => e.preventDefault(), {
      passive: false,
    });

    window.addEventListener('touchstart', e => e.preventDefault(), {
      passive: false,
    });

    telegram.expand();
    
    console.log(telegram.initDataUnsafe)

    telegram.BackButton.onClick(() => {telegram.BackButton.hide(); setactivemenu("profile")})
    telegram.setHeaderColor("#181818")
    telegram.setBackgroundColor("#181818")

    let interval = setInterval(() => {
      settime(new Date());
    }, 500);

    settopuser({user: [{name: "user 1", money: "100"}, {name: "user 2", money: "100"}, {name: "user 3", money: "100"}], group: [{name: "group 1", money: "100"}, {name: "group 2", money: "100"}, {name: "group 3", money: "100"}]})

    async function fetchData() {
      if (telegram.initDataUnsafe.user) {
        const response = await axios.post(
          `${site}/`,
          {
            userid: telegram.initDataUnsafe.user.id,
            platform: "telegram",
            first_name: "telegram.initDataUnsafe.user.first_name",
            last_name: "telegram.initDataUnsafe.user.last_name"
          },
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        setuser({
          first_name: telegram.initDataUnsafe.user.first_name, 
          last_name: telegram.initDataUnsafe.user.last_name,
          photo: response.data.photo ? response.data.photo : logo
        })
      } else {
        const user = await bridge.send("VKWebAppGetUserInfo");
        setuser({
          first_name: user.first_name, 
          last_name: user.last_name,
          photo: logo
        })
      }
    }

    fetchData()

    document.addEventListener("mousemove", e => {
      Object.assign(document.documentElement, {
          style: `${document.documentElement.style.cssText}; --move-x: ${(e.clientY - window.innerHeight / 2) * 0.5}deg; --move-y: ${(e.clientX - window.innerWidth / 2) * 0.5}deg`
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
              <div style={{marginBottom: "2vw"}}>
              <div className='stats'>
                {//<img src="https://sun75-2.userapi.com/s/v1/if2/tITQ5bySaMd5DxzDvj_FK23vWG_rajznbafawMPVvo6AELi0oQY3j29GzheFfe7wcE9hoDeS6oA9da24OH1FPODB.jpg?quality=95&crop=63,0,1141,1141&as=50x50,100x100,200x200,400x400&ava=1&u=svMfBa0kU-GORlIDTaRG9V0N17oSXj-1PpUXnTjKLnQ&cs=200x200" alt="" />
                }
                <div style={{width: "40%", textAlign: "center"}}>
                  <div style={{height: "33%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span style={{fontSize: "2.5vw", whiteSpace: "nowrap"}}>Ваши успехи:</span>
                  </div>
                  <div style={{height: "33%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span style={{fontSize: "3vw", whiteSpace: "nowrap"}}>1.000.000 hackercoin</span>
                  </div>
                  <div style={{height: "33%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span style={{fontSize: "3vw", whiteSpace: "nowrap"}}>500 👨🏻‍💻</span>
                  </div>

                </div>
                <div className='horizontallyseperator' />
                
                <div style={{textAlign: "center", width: "20%"}}>
                  <img style={{borderRadius: "999px", marginBottom: "10px"}} className='divimage' src={user.photo} />
                  <div style={{marginTop: "-30px"}}>
                    <span style={{fontSize: "2vw"}}>{user.first_name}</span>
                  </div>
                  <div style={{marginTop: "-15px"}}>
                    <span style={{fontSize: "2vw"}}>Топ 100</span>
                </div>

                </div>
               <div className='horizontallyseperator' />
               
                <div style={{width: "40%"}}>
                  <div style={{height: "33%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span style={{fontSize: "2.5vw", whiteSpace: "nowrap"}}>Данные о вашем взломе:</span>
                  </div>
                  <div style={{height: "33%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span style={{fontSize: "3vw", whiteSpace: "nowrap"}}>@shishkin666 🐱‍👤</span>
                  </div>
                  <div style={{height: "33%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <span style={{fontSize: "3vw", whiteSpace: "nowrap"}}>05.12.2006 📅</span>
                  </div>
                </div>
                {/*<div>
                  <div className='statsusername'>
                    {`${user.first_name} ${user.last_name}`}
                  </div>
                  <div className='statsusername2'>
                    Топ 100
                  </div>
                  Взлом: 1 пользователей
                  Доход: +100$
              </div>*/}
              </div>
              <div className='verticalyseperator' />
                
              </div>
              <GroupCell height='72%'>
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
            <GroupCell height="85%">
              <Cell onClick={() => nextmenu("playparsing", "hack")} icon={DuckDoctorA}
              righttext="+1 взлом"
              >Парсинг</Cell>
              <Cell 
                onClick={() => nextmenu("playassembler", "hack")} 
                icon={DuckVar}
                righttext="+? взлома"
                disable
                >
                Асемблер
              </Cell>
              <Cell 
              onClick={() => nextmenu("playnaeb", "hack")}
              icon={DuckSpy}
              righttext="+? взлома"
              disable
              >Соц. инженерия</Cell>
              <Cell righttext='+? взлома' icon={DuckWhat} disable>Министерство Образования</Cell>
              {/* onClick={() => telegram.openTelegramLink({path_full: "/hackerapps?startattach=send-assetCurrency__&choose=users"})} icon={Telegram} */}
            </GroupCell>
            {/* <br />
            Социальная инженерия (Заставить человека написать определенное слово)
            <br />
            Парсинг 
            <br /> */}
            <Button>Ссылка для взлома</Button>
          </Window>
          {/* <Button href="https://t.me/share/url?url=t.me/botname/app?startapp=something&text=something">asd</Button> */}
          </Menu>
          <Menu id="top">
            <Window>
          <div className='top'>
            <Icon noanim={true} active={activetopmenu} setactive={setactivetopmenu} id="user">
              <User />
            </Icon>
            <div className='horizontallyseperator' />
            <Icon noanim={true} active={activetopmenu} setactive={setactivetopmenu} id="group">
              <Group />
            </Icon>
          </div>
          <div style={{marginBottom: "2vh"}} className='verticalyseperator' />
          <GroupCell height='70%'>
            {topuser[activetopmenu].map((info: {name: string, money: string}, key : number) => {
              return <Cell key={key} righttext={info["money"]}>{info["name"]}</Cell>
            })}
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
              }}>
              <Money height='20vh' width='20vw' />
            </div>
          </Menu>
          <Menu id="stats">
            <Window>
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
            </ButtonGroup>
            </Window>
          </Menu>
          <Menu style={{display: "flex", justifyContent: "center",}} id="secretsuper">
            <img style={{borderRadius: "15px", position: "absolute", top: "17.5%"}} width={250} src={logo} />
          </Menu>
          <Menu id="playassembler" style={{textAlign: "center"}}>
            <img style={{height: "100px"}} src={DuckVar}></img>
            <br />
            Миниигра Асемблер
            <br />
            Данная игра даст вам 2 ссылку для взлома, и рассказывает о способе связанном с обманом
            <br />
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}><Button>Начать</Button></div>
          </Menu>
          <Menu id="playnaeb" style={{textAlign: "center"}}>
            <img style={{height: "100px"}} src={DuckSpy}></img>
            <br />
            Миниигра Соц. инжерия
            <br />
            Данная игра даст вам 2 ссылку для взлома, и рассказывает о способе связанном с обманом
            <br />
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}><Button>Начать</Button></div>
          </Menu>
          <Menu style={{textAlign: "center"}} id="playparsing">
            <img style={{height: "100px"}} src={DuckDoctorA}></img>
            <br />
            Миниигра Парсинг
            <br />
            Данная игра даст вам 2 ссылку для взлома, и рассказывает о способе связанном с обманом
            <br />
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}><Button onClick={() => {console.log(123)}}>Начать</Button></div>
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
