import style2 from "./style.module.css"

import { Node } from "../../Props"

const Window = ({children, style}: Node) => {
    return <div className={style2.window} style={style}>{children}</div>
}

export default Window