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
        <Fragment>
            {disable ? 
                    <div className={style.cell}>
                        <div className={style.celldisable}></div> 
                        <div className={style.icongroup}>
                            <img className={style.image} src={icon} alt="" />
                        </div>
                        <div className={style.textdiv}>
                            <span className={style.text}>{children}</span>
                            <span className={style.righttext}>Недоступно</span>
                        </div>
                    </div> 
                :
                <div onClick={onClick} className={style.cell}>
                    <div className={style.icongroup}>
                        <img className={style.image} src={icon} alt="" />
                    </div>
                    <div className={style.textdiv}>
                        <span className={style.text}>{children}</span>
                        <span className={style.righttext}>{righttext}</span>
                    </div>
                </div>
            }
        </Fragment>
    : 
        <Fragment>
            {disable ? 
                <div className={style.cell}>
                    <div className={style.celldisable}></div> 
                    <div className={style.textdiv}>
                        <span className={style.text}>{children}</span>
                        <span className={style.righttext}>Недоступно</span>
                    </div>
                </div> 
                :
                <div onClick={onClick} className={style.cell}>
                    <div className={style.textdiv}>
                        <span className={style.text}>{children}</span>
                        <span className={style.righttext}>{righttext}</span>
                    </div>
                </div>
            }
        </Fragment>
        }
    </Fragment>
    )
}

export default Cell