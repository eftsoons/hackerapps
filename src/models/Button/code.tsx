import style from "./style.module.css"

interface Button {
    children: string
    onClick?: () => void
}

// @ts-expect-error
const telegram = window.Telegram.WebApp;

const Button = ({children, onClick} : Button) => {
    return <div onClick={onClick} className={telegram.platform === "android" ? style.buttonandroid : style.button}>{children}</div>
}

export default Button