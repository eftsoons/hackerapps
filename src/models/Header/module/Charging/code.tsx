import { Battery, Bolt, Signal, Telegram, Wifi} from '../../../../svg'

import style from "../style.module.css"

const Charging = () => {
    return <div className={style.text}><Wifi /><Signal /><Signal /><Battery />69%</div>
}

export default Charging