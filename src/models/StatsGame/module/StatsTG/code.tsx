// import { ReactNode } from "react"

import style from "../style.module.css"

interface StatsTG {
    children: string
}

const StatsTG = ({children} : StatsTG) => {
    return <div className={style.stats}>{children}</div>
}

export default StatsTG