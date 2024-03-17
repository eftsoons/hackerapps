import style from "../style.module.css"

interface StatsVK {
    children: string
}

const StatsVK = ({children} : StatsVK) => {
    return <div className={style.stats}>{children}</div>
}

export default StatsVK