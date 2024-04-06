import { Battery, Signal, Wifi} from '../../../../svg'

import style from "../style.module.css"

const Charging = () => {
    return <div className={style.text2}>
        <div><Wifi /></div>
        <div><Signal /></div>
        <div><Signal /></div>
        <div><Battery /></div>
        <div>69%</div>
    </div>
}

export default Charging