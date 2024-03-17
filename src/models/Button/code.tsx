import style from "./style.module.css"

interface Button {
    children: string
    onClick?: () => void
}

const Button = ({children, onClick} : Button) => {
    return <div onClick={onClick} className={style.button}>{children}</div>
}

export default Button