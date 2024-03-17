import { ReactNode } from "react"

import style from "./style.module.css"

interface ButtonGroup {
    children: ReactNode
}

const ButtonGroup = ({children} : ButtonGroup) => {
    return <div className={style.buttongroup}><div className={style.buttongroup2}>{children}</div></div>
}

export default ButtonGroup