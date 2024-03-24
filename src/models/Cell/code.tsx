import { Fragment } from "react"

import style from "./style.module.css"

interface Cell {
    children: string
    icon?: string
    disable?: boolean
    onClick?: () => void
}

const Cell = ({children, icon, disable, onClick} : Cell) => {
    return (
    <Fragment>
        {icon ?
    <div onClick={onClick} className={!disable ? style.cell : style.celldisable}>
        <div className={style.icongroup}>
            <div className={style.divimage}>
             <img className={style.image} src={icon} alt="" />
            </div>
        </div>
        <span className={style.text}>{children}</span>
    </div> 
    : 
    <div onClick={onClick} className={!disable ? style.cell : style.celldisable}>
        <span className={style.text}>{children}</span>
    </div>
     }
    </Fragment>
    )
}

export default Cell