import { Fragment } from "react"

import style from "./style.module.css"

interface Cell {
    children: string
    icon?: string
    disable?: boolean
    onClick?: () => void
    righttext?: string
    bottomtext?: string
}

const Cell = ({children, icon, disable, onClick, righttext, bottomtext} : Cell) => {
    return (
        <div onClick={onClick} className={disable ? style.celldisable : style.cell}>
            {icon &&
            <div className={style.icongroup}>
                <img className={style.image} src={icon} alt="" />
            </div>
            }
            <div className={style.textdiv}>
                <div className={style.text}>
                    <div className={style.maintext}>
                        {children}
                    </div>
                    {bottomtext &&
                    <div className={style.bottomtext}>
                        {bottomtext}
                    </div>
                    }
                </div>
                <span className={style.righttext}>{righttext}</span>
            </div>
        </div> 
    )
}

export default Cell