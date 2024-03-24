import style from "./style.module.css"

import { Node } from "../../Props"

const Window = ({children}: Node) => {
    return <div className={style.window}>{children}</div>
}

export default Window