import {Node} from "../../../../Props"

import style from "../style.module.css"

const Stats = ({children} : Node) => {
    return <div className={style.stats2}>{children}</div>
}

export default Stats