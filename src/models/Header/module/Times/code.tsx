import style from "../style.module.css"

interface Times {
    children: Date
}

const Times = ({children} : Times) => {
    return <span className={style.text} style={{width: "35%"}}>{`${children.getHours() > 9 ? children.getHours() : `0${children.getHours()}`}:${
        children.getMinutes() > 9 ? children.getMinutes() : `0${children.getMinutes()}`
      }:${
        children.getSeconds() > 9 ? children.getSeconds() : `0${children.getSeconds()}`
      }`}</span>
}

export default Times

