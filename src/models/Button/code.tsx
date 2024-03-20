import style from "./style.module.css"

interface Button {
    children: string
    onClick?: () => void
    href?: string
}

// @ts-expect-error
const telegram = window.Telegram.WebApp;

const Button = ({children, onClick, href} : Button) => {
    return (!href ? 
    <button onClick={onClick} className={telegram.platform === "android" ? style.buttonandroid : style.button}>
        {children}
    </button> : 
    <a href={href} target="blank">
    <button onClick={onClick} className={telegram.platform === "android" ? style.buttonandroid : style.button}>
        {children}
    </button>
    </a>
    )
}

export default Button