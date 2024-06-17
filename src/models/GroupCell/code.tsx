import { Children, Fragment } from "react"

import style from "./style.module.css"

import {Node} from "../../Props"

const GroupCell = ({children, height, key} : Node) => {
    return (
        <div key={key} style={{height: height}} className={style.groupmain}>
            {Children.toArray(children).map((children) => (
            <Fragment>
                {/* {index != 0 && <div className={style.seperator} />} */}
                <div className={style.groupcell}>
                    {children}
                </div>
            </Fragment>
            ))}
        </div>
    )
}

export default GroupCell