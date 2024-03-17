import {Node} from "../../../../Props"

import style from "../style.module.css"

const StatsTG = ({children} : Node) => {
    return <div className={style.stats}>{children}</div>
}

export default StatsTG