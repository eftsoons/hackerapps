import style from "../style.module.css"

interface  Stats {
    children: string
}

const Stats = ({children} : Stats) => {
    return <div className={style.stats}>{children}</div>
}

export default Stats