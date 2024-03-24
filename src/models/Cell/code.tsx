import { Fragment } from "react"

import style from "./style.module.css"

interface Cell {
    children: string
    icon?: string
    disable?: boolean
    onClick?: () => void
    righttext?: string
}

const Cell = ({children, icon, disable, onClick, righttext} : Cell) => {
    return (
    <Fragment>
        {icon ?
    <div onClick={onClick} className={!disable ? style.cell : style.celldisable}>
        <div className={style.icongroup}>
            <div className={style.divimage}>
             <img className={style.image} src={icon} alt="" />
            </div>
        </div>
        <div className={style.textdiv}>
            <span className={style.text}>{children}</span>
            <span className={style.righttext}>{righttext}</span>
        </div>
    </div> 
    : 
    <div onClick={onClick} className={!disable ? style.cell : style.celldisable}>
        <div className={style.textdiv}>
            <span className={style.text}>{children}</span>
            <span className={style.righttext}>{righttext}</span>
        </div>
    </div>
     }
    </Fragment>
    )
}

export default Cell