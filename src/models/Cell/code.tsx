// import { Fragment } from "react"

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
        <button onClick={() => !disable && onClick && onClick()} className={disable ? style.celldisable : style.cell}>
            {icon &&
            <div className={style.icongroup}>
                <img loading="lazy" className={style.image} src={icon} alt="" />
            </div>
            }
            <div className={icon ? style.textdivicon : style.textdiv}>
                <div>
                    <div className={style.maintext}>
                        {children}
                    </div>
                    <div className={style.bottomtext}>
                        {bottomtext}
                    </div>
                </div>
                <span className={style.righttext}>{righttext}</span>
            </div>
        </button> 
    )
}

export default Cell