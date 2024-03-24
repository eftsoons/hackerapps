import { ReactNode } from "react"

import style from "./style.module.css"

interface Cell {
    children: string
    icon?: string
    disable?: boolean
    onClick?: () => void
}

const Cell = ({children, icon, disable, onClick} : Cell) => {
    return (
    <div onClick={onClick} className={!disable ? style.cell : style.celldisable}>
        <div className={style.icongroup}>
            <img className={style.image} src={icon} alt="" />
            <div className={style.seperator} />
        </div>
        <span className={style.text}>{children}</span>
    </div>)
}

export default Cell