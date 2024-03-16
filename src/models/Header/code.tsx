import { ReactNode } from "react"

import style from "./style.module.css"

type Header2 = {
    children: ReactNode
}

const Header = ({children} : Header2) => {
    return <div className={style.header}>{children}</div>
}

export default Header