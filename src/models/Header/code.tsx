import { PropsWithChildren } from "react"

import style from "./style.module.css"

const Header = ({children} : PropsWithChildren) => {
    return <div className={style.header}>{children}</div>
}

export default Header