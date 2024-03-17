import { Battery, Signal, Wifi} from '../../../../svg'

import style from "../style.module.css"

const Charging = () => {
    return <div className={style.text} style={{width: "39%"}}><Wifi /><Signal /><Signal /><Battery />69%</div>
}

export default Charging