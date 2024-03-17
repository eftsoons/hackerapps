import { ReactNode } from "react"

import {Node} from "../../Props"

import style from "./style.module.css"

interface ButtonGroup {
    children: ReactNode
}

const ButtonGroup = ({children} : Node) => {
    return <div className={style.buttongroup}><div className={style.buttongroup2}>{children}</div></div>
}

export default ButtonGroup