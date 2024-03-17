import { ReactNode } from "react"

import style from "./style.module.css"

interface StatsGame {
    children: ReactNode
}

const StatsGame = ({children} : StatsGame) => {
    return <div className={style.game}>{children}</div>
}

export default StatsGame